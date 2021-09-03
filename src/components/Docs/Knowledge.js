import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";


const Knowledge = () => {
    let text;
    const markdown = "#### The quarterly results look great! - Revenue was off the chart.- Profits were higher than ever.*Everything* is going according to **plan**.";
    useEffect(() => {
        
        fetch('./knowledgeData.txt')
            .then((res) =>{
                return res
            })
            .then((data) => {
                data.text()
            })
            .then((normal) => {
                text = normal
            })
    }, [])
    return (
        <ReactMarkdown />
    )
}

export default Knowledge;
