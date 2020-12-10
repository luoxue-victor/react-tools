import { Fragment } from "react";

// 只存在虚拟 dom 中，不会生成真实的 dom
// 类似于 vue 的 template
// key 是唯一可以传递给 Fragment 的属性
export default function Frag () {
  console.log('Fragment', Fragment); // Fragment Symbol(react.fragment)

  return (
    <ul>
      <Fragment>
        <li>1</li>
        <li>2</li>
      </Fragment>
      <>
        <li>3</li>
        <li>4</li>
      </>
    </ul>
  )
}