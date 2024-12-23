import React, { useEffect, useRef, useState } from 'react'
import "./PriceRange.css"

export default function PriceRange({range, setRange, filterPrices, togglePrice}) {

    const sliderBar = useRef(null);
    const minRangeInputRef = useRef(null);
    const maxRangeInputRef = useRef(null);

    const priceGap = 40;
    const minRangeInput = minRangeInputRef.current;
    const maxRangeInput = maxRangeInputRef.current;

    const handleRange = (e) => {

        const minRange = parseInt(minRangeInput.value);
        const maxRange = parseInt(maxRangeInput.value);
        
        if (maxRange - minRange < priceGap) {
            if (e.target === minRangeInput) {
                minRangeInput.value = maxRange - priceGap;
            } else {
                maxRangeInput.value = minRange + priceGap;
            }
        } else {
            setRange({minRange, maxRange});
            sliderBar.current.style.left = (minRange / minRangeInput.max) * 100 + "%";
            sliderBar.current.style.right = 100 - (maxRange / maxRangeInput.max) * 100 + "%";
        }
        filterPrices();
    }

    useEffect(()=> {
        if (range.minRange === 0 && range.maxRange === 300) {
            if (minRangeInput !== null && maxRangeInput !== null && sliderBar.current !== null) {
                minRangeInput.value = "0";
                maxRangeInput.value = "300";
                sliderBar.current.style.left = "0";
                sliderBar.current.style.right = "0";
            }
        }
    })

    return (
        <div className={togglePrice? "price-range show" : "price-range hide"}>
            <div className='slider'>
                <div className='bar' ref={sliderBar}></div>
                <div className='range-inputs'>

                    <input 
                    type="range" 
                    name="minRange" 
                    min="0" 
                    max="300" 
                    step="2"
                    defaultValue={range.minRange} 
                    ref={minRangeInputRef}
                    onChange={handleRange}
                    />

                    <input 
                    type="range" 
                    name="maxRange" 
                    min="0" 
                    max="300" 
                    step="2"
                    defaultValue={range.maxRange} 
                    ref={maxRangeInputRef}
                    onChange={handleRange}
                    />

                </div>
            </div>
            <div className='num-inputs'>
                <div className='num-input'>
                    <label>Min price</label>
                    <input type="number" name='maxNum' disabled value={range.minRange}/>
                </div>
                <div className='num-input'>
                    <label>Max price</label>
                    <input type="number" name='minNum' disabled value={range.maxRange}/>
                </div>
            </div>
        </div>
    )
}
