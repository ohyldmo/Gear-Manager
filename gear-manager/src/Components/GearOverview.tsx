import React from 'react';
import {GearItem} from '../Interfaces/Interfaces'
import GearItemRow from './GearItemRow'
interface Props {
    gearList: GearItem[]
}



function GearOverview (props:Props) {
    let allGear:GearItem[] = props.gearList
    let categories: string[] = []

    function getCategories() {
        for (var i = 0; i < allGear.length; i++) {
            if (categories.includes(allGear[i].category) === false) {
                categories.push(allGear[i].category);
            }
        }     
    }

    getCategories()

    return  <div className="gearOverview">
                {categories.map((category:string) => {
                    
                    return  <div>
                                <h3>{category} <button>+</button></h3>
                    <table>
                    <thead>
                        <tr>
                            <th>Name</th><th>Is Packed</th><th>Weight</th><th>Packed Location</th><th>Storage Location</th><th>Tags</th><th>Notes</th><th>Requires Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allGear.map((gear:GearItem) => {
                                        if (gear.category === category) {
                                            return <GearItemRow gear={gear}/>
                                        }
                                    })}
                    </tbody>
                </table>


                                
                            </div>
                
                })}
            </div>
}


export default GearOverview