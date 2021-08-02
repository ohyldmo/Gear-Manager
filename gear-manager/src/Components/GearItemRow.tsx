import React from 'react';
import {GearItem} from '../Interfaces/Interfaces'

interface Props {
    gear: GearItem
}



function GearItemRow (props:Props) {
    return  <div className="gearRow">
                <span className="gearRowSpan">{props.gear.name}</span>
                <span className="gearRowSpan">{props.gear.isPacked.toString()}</span>
                <span className="gearRowSpan">{props.gear.weight} g</span>
                <span className="gearRowSpan">{props.gear.packedLocation}</span>
                <span className="gearRowSpan">{props.gear.storageLocation}</span>
                <span className="gearRowSpan">{props.gear.tags}</span>
                <span className="gearRowSpan">{props.gear.notes}</span>
                <span className="gearRowSpan">{props.gear.needsReview.toString()}</span>
            </div>
}


export default GearItemRow