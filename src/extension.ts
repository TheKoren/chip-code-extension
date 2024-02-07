import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(vscode.commands.registerCommand('chip.Chip', () => {
		const column = { viewColumn: vscode.ViewColumn.Beside, preserverFocus: true };
		const options = { enableScripts: true };
		const panel = vscode.window.createWebviewPanel(
			'chip',
			'Chip',
			column,
			options
		);
		panel.reveal();
		panel.webview.html = `
			<!DOCTYPE html>
			<html>
				<head>
					<meta http-equiv="Content-type" content="text/html;charset=UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1">
					<style>
                        #video {
                            display: flex;
                            flex-flow: column nowrap;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                            height: 100%;
                        }
                    </style>
					<title>Chip</title>
				</head>
				<body>
					<div id="video">
							<video id="video-play" autoplay loop controls width="300">
								<source src='https://yewtu.be/latest_version?id=WIRK_pGdIdA&itag=18#t=100&local=true'>
							</video>
					</div>
				</body>
            </html>	
			`;
	}));
}