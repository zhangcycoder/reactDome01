import React, { Component } from 'react'
export default class phone extends Component {
    constructor(props) {
        super()
        this.state = {
            type: '手机数码',
            data:[]
        }
    }
    render() {
        return (
            <div className="big">
                {console.log(this.state)}
                {
                    this.state.data.map((value,index) => {
                        return <div key={index} className='box'>
                            <div>
                                <img src={value.item_icon} alt=""/>
                            </div>
                            <div>{value.item_name}</div>
                        </div>
                    })
                }
            </div>
        )
    }
    
    componentDidMount() {
        console.log(this.props.location)

        // this.setState({
        //     type:this.props.location.state.data[0].category_name,
        //     data:this.props.location.state.data[0].category_items
        // })
        this.props.location.state.data.forEach((element,i) => {
            if (element.category_name === this.state.type) {
                this.setState({
                    type: element.category_name,
                    data:element.category_items
                })
            }
        });
        
   }
    componentWillReceiveProps(props) {
        this.props = props
        this.props.location.state.data.forEach((element, i) => {
            if (element.category_name === this.props.location.state.type) {
                this.setState({
                    type: element.category_name,
                    data:element.category_items
                })
            }
        });
        
   }
}
