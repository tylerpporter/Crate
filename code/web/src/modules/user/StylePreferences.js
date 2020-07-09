// Imports
import React, { PureComponent } from 'react';

//UI Import
import H3 from '../../ui/typography/H3'
import Input from '../../ui/input/Input'
import Button from '../../ui/button/Button'
// import Icon from '../../ui/icon'

class StylePreferences extends PureComponent {

 constructor(props) {
  super(props);
    this.state = {
            isLoading: false,
            top: null,
            dress: null,
            bottom: null
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.setState({isLoading: true})
        let result = this.pointSystem()
        alert(result);
    }

    pointSystem = () => {
        let sum = Number(this.state.dress) + Number(this.state.top) + Number(this.state.bottom);
        if(sum <= 3) {
            return "Laidback"
        } else if (sum === 4 || sum === 5 || sum === 6) {
            return 'Smart Casual'
        } else if (sum > 6) {
            return "Sophisticated"
        }
    }

    render() {
        return(
         <section>
             <form onSubmit={this.onSubmit}>
                <H3>Dresses</H3>
                <Input
                    type = 'radio'
                    id = 'dressCasual'
                    name = 'dress'
                    value = '1'
                    onChange = {this.onChange}
                />
                <label for='dressCasual'>Casual</label>
                <Input
                    type = 'radio'
                    id = 'dressStreet'
                    name = 'dress'
                    value = '2'
                    onChange = {this.onChange}
                />
                <label for='dressStreet'>Street</label>
                <Input
                    type = 'radio'
                    id = 'dressProfessional'
                    name = 'dress'
                    value = '3'
                    onChange = {this.onChange}
                />
                <label for='dressProfessional'>Professional</label>

                <H3>Tops</H3>
                <Input
                    type = 'radio'
                    id = 'topCasual'
                    name = 'top'
                    value = '1'
                    onChange = {this.onChange}
                />
                <label for='topCasual'>Casual</label>
                <Input
                    type = 'radio'
                    id = 'topStreet'
                    name = 'top'
                    value = '2'
                    onChange = {this.onChange}
                />
                <label for='topStreet'>Street</label>
                <Input
                    type = 'radio'
                    id = 'topProfessional'
                    name = 'top'
                    value = '3'
                    onChange = {this.onChange}
                />
                <label for='topProfessional'>Professional</label>

                <H3>Bottoms</H3>
                <Input
                    type = 'radio'
                    id = 'bottomCasual'
                    name = 'bottom'
                    value = '1'
                    onChange = {this.onChange}
                />
                <label for='bottomCasual'>Casual</label>
                <Input
                    type = 'radio'
                    id = 'bottomStreet'
                    name = 'bottom'
                    value = '2'
                    onChange = {this.onChange}
                />
                <label for='bottomStreet'>Street</label>
                <Input
                    type = 'radio'
                    id = 'bottomProfessional'
                    name = 'bottom'
                    value = '3'
                    onChange = {this.onChange}
                />
                <label for='bottomProfessional'>Professional</label>
                <div>
                <Button type="submit" theme="secondary" disabled={this.state.isLoading}>
                    {/* <Icon size={1.2} style={{ color: white }}>check</Icon> Save */}
                </Button>
                  </div>
             </form>
             
         </section>
        )
    }
}

export default StylePreferences;

