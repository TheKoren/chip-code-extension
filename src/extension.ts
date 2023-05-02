import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "chip" is now active!');
	context.subscriptions.push(vscode.commands.registerCommand('chip.openYoutube', () => {
		const panel = vscode.window.createWebviewPanel(
			'chip',
			'YouTube Video',
			vscode.ViewColumn.One,
			{}
		);
		panel.reveal();
		panel.webview.html = `
			<!DOCTYPE html>
			<html>
			<head>
				<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>YouTube Video</title>
			</head>
			<body>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/WIRK_pGdIdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</body>
			</html>
		`;
	}));
}