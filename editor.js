require.config({
    paths: {
        'vs': 'monaco-editor/min/vs'
    }
});
var mainEditor;
require(['vs/editor/editor.main'], function() {
    function lineNumbersFunc(originalLineNumber) {
        if (originalLineNumber === 1) {
            return "0";
        }
        return originalLineNumber - 1;
    }
    mainEditor = monaco.editor.create(document.getElementById('editor'), {
        value: [
            'tst 0',
            'jmp 3',
            'jmp 2',
            'dec 0',
            'jmp 0'
        ].join('\n'),
        language: 'sql',
        theme: 'vs-dark',
        lineNumbers: lineNumbersFunc
    });

    mainEditor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function() {
        saveToFile();
    });

    mainEditor.addCommand(monaco.KeyCode.F4, function() {
        btnRun();
    });
    mainEditor.addCommand(monaco.KeyCode.F3, function() {
        compileProg(false);
    });
});