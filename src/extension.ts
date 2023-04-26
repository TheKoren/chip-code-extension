// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "chip" is now active!');
	context.subscriptions.push(vscode.commands.registerCommand('chip.openYoutube', () => {
		// Create a new panel
		const panel = vscode.window.createWebviewPanel(
			'chip', // Identifies the type of the webview. Used internally
			'YouTube Video', // Title of the panel displayed to the user
			vscode.ViewColumn.One, // Editor column to show the new webview panel in.
			{} // Webview options. More on these later.
		);
		// Create the HTML content for the webview
		panel.webview.html = `
			<!DOCTYPE html>
			<html>
			<head>
				<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>YouTube Video</title>
			</head>
			<body>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/WIRK_pGdIdA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</body>
			</html>
		`;
	}));
}