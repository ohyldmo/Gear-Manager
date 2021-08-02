import React from 'react';

interface Props {
    tags: string[]
}


function Tags (props:Props) {
    return  <div className="tags">
                <h3>Tags:</h3>
                {props.tags.map((tag:string) => {
                            return  <span className="sidebar-tag">#{tag}</span>
                            })}
            </div>

}


export default Tags