function customrender(reactElement,container){
// type 1
    const domelement= document.createElement(reactElement.type);
    domelement.innerHTML=reactElement.children
    domelement.setAttribute('href',reactElement.props.href)
    domelement.setAttribute('target',reactElement.props.target)

    container.appendChild(domelement)
// type 2
    const domeelement= document.createElement(reactElement.type)
    domeelement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domeelement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domeelement)
}


const reactElement = {
    type:'a',
    props:{
        href: 'https://google.com',
        target :'_blank'
    },
    children: 'click me to visit google'
}

const maincontainer=document.querySelector('#root');

customrender(reactElement,maincontainer)
