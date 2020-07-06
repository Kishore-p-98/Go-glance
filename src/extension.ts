import * as vscode from 'vscode';
import { getGlancableCode } from './util';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('golangglance.glanceGo', () => {

		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showInformationMessage('Active editor not found');
			return;
		}

		const fileName = editor.document.fileName;
		if (!fileName.endsWith('.go')) {
			return;
		}

		const document = editor.document;
		const selection = editor.selection;
		const code = document.getText(selection);
		const refactoredCode = getGlancableCode(code);
		editor.edit(editBuilder => {
			editBuilder.replace(selection, refactoredCode);
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
