import { Component } from "react";
import genericImage from '../../assets/nz1.jpg'
import './SpaceComponent.css'

interface SpaceComponentProps {
    spaceId: string,
    name: string,
    location: string,
    photoUrl?: string // por ser opcional, colocamos esse '?'
    reserveSpace: (spaceId: string) => void // esse aqui corresponde ao botao 'Reserve'
}

export class SpaceComponent extends Component<SpaceComponentProps> {

    private renderImage() {
        if (this.props.photoUrl) {
            return <img src={this.props.photoUrl} alt=''/>
        } else {
            return <img src={genericImage} alt=''/>
        }
    }

    render() {
        // <br/> equivale a um 'break'
        return <div className='spaceComponent'>
            {this.renderImage()}
            {/* 'class' e 'className' sao a mesma coisa */}
            <label className='name'>{this.props.name}</label><br/> 
            <label className='spaceId'>{this.props.spaceId}</label><br/> 
            <label className='location'>{this.props.location}</label><br/> 
            <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>Reserve</button>
        </div>

        
    }
    
}

// there is properties inside the components