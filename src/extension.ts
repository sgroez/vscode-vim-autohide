import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    //close sidebar on load
    vscode.commands.executeCommand("workbench.action.closeSidebar");

    vscode.window.onDidChangeTextEditorSelection(selection => {
        vscode.commands.executeCommand("workbench.action.closeSidebar");
   });
}

export function deactivate() { }
