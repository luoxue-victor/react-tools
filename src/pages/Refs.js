import React from 'react';

class ClassCom extends React.Component {
  render() {
    return <button className="ClassCom">
      {this.props.children}
    </button>
  }
}

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

export default function Refs() {
  // 你可以直接获取 DOM button 的 ref
  const ref = React.createRef();
  
  function getRef (ins) {
    console.log('在组件中，ref获取的是组件的实例', ins);
  }

  return (
    <div>
      <FancyButton ref={ref} >
        <div onClick={() => { console.log(ref) }}>FancyButton</div>
      </FancyButton>
      <ClassCom ref={getRef}>ClassCom</ClassCom>
    </div>
  );
}