import React from 'react';
import {GearItem} from '../Interfaces/Interfaces'

interface Props {
    gear: GearItem
}



function GearItemRow (props:Props) {
    return  <tr>
                <td>{props.gear.name}</td>
                <td>{props.gear.isPacked.toString()}</td>
                <td>{props.gear.weight} g</td>
                <td>{props.gear.packedLocation}</td>
                <td>{props.gear.storageLocation}</td>
                <td>{props.gear.tags}</td>
                <td>{props.gear.notes}</td>
                <td>{props.gear.needsReview.toString()}</td>
            </tr>
}


export default GearItemRow