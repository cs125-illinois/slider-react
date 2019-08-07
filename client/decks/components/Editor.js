import React, {useEffect} from 'react';

import loadable from '@loadable/component';

const AceEditor = loadable(() => import('react-ace'));

function Editor (props) {

  useEffect(() => {
    require('brace');
    require('brace/mode/java')
    require('brace/theme/github');
  }, [props])

  return (
    <AceEditor
      mode="java"
      theme="github"
      name="slide-text-editor"
      value={`public static void main(String[] args) {\n\tSystem.out.println("Hello world");\n}`}
      {...props}
    />
  );
}

export default Editor;
