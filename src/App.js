import React from 'react'

const App = () => {
    // return 这个() 不能省，否则返回undefined
    // 这里相当于使用了React.createElement，所以最好在开头引入react
    return (
        <div>App组件
            <Component numbers={['a','b','c']}/>
        </div>
    )
}

const Component = (props) => {
    const array = []
    for(let i = 0;i < props.numbers.length;i++){
      array.push(<div>{i}:{props.numbers[i]}</div>)
    }
    return <div>{array}</div>
}

export default App