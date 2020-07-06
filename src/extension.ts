import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "golangglance" is now active!');

	let disposable = vscode.commands.registerCommand('golangglance.glanceGo', () => {

		vscode.window.showInformationMessage('Hello World from golangGlance!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
