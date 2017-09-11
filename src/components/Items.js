import React, { Component } from 'react';


class Items extends Component {
    constructor(props) {
        super()
        this.createNestedArray = this.createNestedArray.bind(this)
    }

    componentWillMount() {
        console.log(this.props.itemType)
        let item = this.props.itemType
        let data = require(`../data/${item}.json`)
        console.log(data)

        this.data = data

        let newData
        let imgSrc
        newData = data.map((curItem) => {
            
            return (
                <div className="card mb-4">
                    
                    <img className="card-img-top" data-src="holder.js/100px180/" alt="100%x180" src={`${curItem.image}`} data-holder-rendered="true" style={{height: "180px", width: "100%", display: "block"}} />
                    
                    <div className="card-body">
                        <h4 className="card-title">{curItem.name}</h4>
                        <p className="card-text">{curItem.desc}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <button type="button" className="btn-group btn-dark btn-group-sm rounded">Add to Cart</button><span> ${curItem.price}</span>
                    </div>
                </div>

            )
        })

        this.newData = newData
        this.newData = this.createNestedArray(newData)

    }


    createNestedArray(itemList) {
        let count = 0
        let rowCount = 0
        let rowArr = []
        let nestedArr = []
        let rowElement

        while(count < itemList.length) {
            rowArr = []
            rowCount = 0
            while(rowCount < 3) {
                rowArr.push(itemList[count])

                rowCount++
                count++
            }

            rowElement = (
                <div className="card-group">
                    {rowArr}
                </div>
            )

            nestedArr.push(rowElement)
        }

        return nestedArr

    }


    render() {
        return (
            <div>
                {this.newData}
            </div>

        );
    }
}

export default Items;