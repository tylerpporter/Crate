// Imports
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//UI Import
import { H2, H3 } from "../../ui/typography";
import Input from "../../ui/input/Input";
import Button from "../../ui/button";
import { white } from "../../ui/common/colors";
import Icon from "../../ui/icon";
import Tile from '../../ui/image/Tile'
import { level1, level3 } from '../../ui/common/shadows'
import { Grid, GridCell } from '../../ui/grid'
import { primary ,secondary } from '../../ui/common/fonts'

//APP IMPORTS
import { APP_URL } from '../../setup/config/env'


import { updateStylePreference } from "./api/actions";
import user from "../../setup/routes/user";
import { messageHide , messageShow} from '../common/api/actions'

class StylePreferences extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
      isLoading: false,
      top: null,
      dress: null,
      bottom: null,
      shoes: null
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    let result = this.pointSystem();
    let userSummary = {
      id: this.props.user.details.id,
      stylePreference: result,
    };
    this.props.updateStylePreference(userSummary);
    this.setState({ isComplete: true, isLoading: false });
    this.props.messageShow('Subscribed successfully.')
    window.setTimeout(() => {
        this.props.messageHide()
      }, 3000)
  };

  pointSystem = () => {
    let sum =
      Number(this.state.dress) +
      Number(this.state.top) +
      Number(this.state.bottom) +
      Number(this.state.shoes);
    if (sum <= 4) {
      return "Laidback";
    } else if (sum === 5 || sum === 6 || sum === 7 || sum === 8) {
      return "Smart Casual";
    } else if (sum > 8) {
      return "Sophisticated";
    }
  };

  getStyleResult = () => {
    if (this.props.user.details.stylePreference === 'Laidback') {
      return 'style_results_casual'
    } else if (this.props.user.details.stylePreference === 'Smart Casual') {
      return 'style_results_street'
    } else if (this.props.user.details.stylePreference === 'Sophisticated') {
      return 'style_results_professional'
    }
  }

  render() {
    return (
      <section style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
        {!this.state.isComplete && (
          <form onSubmit={this.onSubmit} style={{display:'flex', flexDirection:'column', alignItems:'center', marginBottom:'2em'}}>
          
          
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            
            
            {/* Casual */}
            <div style={{ display: 'flex', margin: '20px', alignItems: 'center'}}>
            <H3 style= {{fontFamily: secondary}}>Dresses</H3>
              <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}}>
              <label htmlFor="dressCasual" style={{textAlign: 'center'}}>
                <Tile style={{ boxShadow: level1}}  width={300} height={300} image={`${ APP_URL }/images/styles/dresses/dresses_casual.jpeg`} />
                <Input
                  type="radio"
                  id="dressCasual"
                  name="dress"
                  value="1"
                  onChange={this.onChange}
                  style = {{margin:'1em', textAlign:'center'}}
                />
                Casual</label>
              </div>

              {/* Street */}
       
                <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}} >
                <label htmlFor="dressStreet" style={{textAlign: 'center'}}>
                  <Tile style={{ boxShadow: level1}}  width={300} height={300} image={`${ APP_URL }/images/styles/dresses/dresses_street.jpg`} />
                  <Input
                    type="radio"
                    id="dressStreet"
                    name="dress"
                    value="2"
                    onChange={this.onChange}
                    style = {{margin:'1em', textAlign:'center'}}
                  />
                  Street</label>
                </div>


              {/* Professional */}
              
   
                <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}}>
                <label htmlFor="dressProfessional" style={{textAlign: 'center'}}>
                  <Tile style={{ boxShadow: level1}} width={300} height={300} image={`${ APP_URL }/images/styles/dresses/dresses_professional.jpeg`} />
                  <Input
                    type="radio"
                    id="dressProfessional"
                    name="dress"
                    value="3"
                    onChange={this.onChange}
                    style = {{margin:'1em', textAlign:'center'}}
                  />
                  Professional</label>
                </div>
 
            </div>
          </div>
    
          <div style={{ display: 'flex', flexDirection: 'column', margin: '20px'}}>
              
              {/* Casual */}
   
              <div style={{ display: 'flex', alignItems: 'center', alignItems: 'center'}}>
              <H3 style= {{fontFamily: secondary}}>Tops</H3>
                <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}}>
                  <label htmlFor="topCasual" style={{textAlign: 'center'}}>
                    <Tile style={{ boxShadow: level1}} width={300} height={300} image={`${ APP_URL }/images/styles/tops/tops_casual.jpg`} />
                    <Input
                      type="radio"
                      id="topCasual"
                      name="top"
                      value="1"
                      onChange={this.onChange}
                      style = {{margin:'1em', textAlign:'center'}}
                    />
                    Casual
                  </label>
                </div>
               

                {/* Street */}
                <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}}>
                  <label htmlFor="topStreet" style={{textAlign: 'center'}}>
                    <Tile style={{ boxShadow: level1}} width={300} height={300} image={`${ APP_URL }/images/styles/tops/tops_street.jpg`} />
                      <Input
                        type="radio"
                        id="topStreet"
                        name="top"
                        value="2"
                        onChange={this.onChange}
                        style = {{margin:'1em', textAlign:'center'}}
                      />
                    Street
                  </label>
                </div>

                {/* Professional */}
                <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}}>
                  <label htmlFor="topProfessional" style={{textAlign: 'center'}}>
                    <Tile style={{ boxShadow: level1}} width={300} height={300} image={`${ APP_URL }/images/styles/tops/tops_professional.jpg`} />
                      <Input
                        type="radio"
                        id="topProfessional"
                        name="top"
                        value="3"
                        onChange={this.onChange}
                        style = {{margin:'1em', textAlign:'center'}}
                      />
                      Professional
                  </label>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', margin: '20px'}}>
            
            {/* Casual */}
            <div style={{ display: 'flex', alignItems: 'center'}}>
            <H3 style= {{fontFamily: secondary}}>Bottoms</H3>
              <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}}>
                <label htmlFor="bottomCasual" style={{textAlign: 'center'}}>
                  <Tile style={{ boxShadow: level1}} width={300} height={300} image={`${ APP_URL }/images/styles/bottoms/bottoms_casual.jpg`} />
                  <Input
                    type="radio"
                    id="bottomCasual"
                    name="bottom"
                    value="1"
                    onChange={this.onChange}
                    style = {{margin:'1em', textAlign:'center'}}
                  />
                  Casual
                </label>
              </div>
              
              {/* Street */}
              <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}}>
                <label htmlFor="bottomStreet" style={{textAlign: 'center'}}>
                  <Tile style={{ boxShadow: level1}} width={300} height={300} image={`${ APP_URL }/images/styles/bottoms/bottoms_street.jpg`} />
                  <Input
                    type="radio"
                    id="bottomStreet"
                    name="bottom"
                    value="2"
                    onChange={this.onChange}
                    style = {{margin:'1em', textAlign:'center'}}
                  />
                  Street
                </label>
              </div>
              
              {/* Professional */}
              <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}}>
                <label htmlFor="bottomProfessional" style={{textAlign: 'center'}}>
                  <Tile style={{ boxShadow: level1}} width={300} height={300} image={`${ APP_URL }/images/styles/bottoms/bottoms_professional.jpg`} />
                  <Input
                    type="radio"
                    id="bottomProfessional"
                    name="bottom"
                    value="3"
                    onChange={this.onChange}
                    style = {{margin:'1em', textAlign:'center'}}
                  />
                  Professional
                </label>
              </div>
            </div>
          </div>
           
          <div style={{ display: 'flex', flexDirection: 'column', margin: '20px'}}>
            
            {/* Casual */}
            <div style={{ display: 'flex', alignItems: 'center'}}>
            <H3 style= {{fontFamily: secondary}}>Shoes</H3>
              <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}}>
                <label htmlFor="shoesCasual" style={{textAlign: 'center'}}>
                  <Tile style={{ boxShadow: level1}} width={300} height={300} image={`${ APP_URL }/images/styles/shoes/shoes_casual.jpg`} />
                  <Input
                    type="radio"
                    id="shoesCasual"
                    name="shoes"
                    value="1"
                    onChange={this.onChange}
                    style = {{margin:'1em', textAlign:'center'}}
                  />
                  Casual
                </label>
              </div>
              
              {/* Street */}
              <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}}>
                <label htmlFor="shoesStreet" style={{textAlign: 'center'}}>
                  <Tile style={{ boxShadow: level1}} width={300} height={300} image={`${ APP_URL }/images/styles/shoes/shoes_street.jpg`} />
                  <Input
                    type="radio"
                    id="shoesStreet"
                    name="shoes"
                    value="2"
                    onChange={this.onChange}
                    style = {{margin:'1em', textAlign:'center'}}
                  />
                  Street
                </label>
              </div>

            {/* Professional */}
              <div style={{ display: 'flex', flexDirection: 'column', margin: '20px', alignItems: 'center'}}>
                <label htmlFor="shoesProfessional" style={{textAlign: 'center'}}>
                  <Tile style={{ boxShadow: level1}} width={300} height={300} image={`${ APP_URL }/images/styles/shoes/shoes_professional.jpg`} />
                  <Input
                    type="radio"
                    id="shoesProfessional"
                    name="shoes"
                    value="3"
                    onChange={this.onChange}
                    style = {{margin:'1em', textAlign:'center'}}
                  />
                  Professional
                </label>
              </div>
            </div>
          </div>
            <div>
             
             
              <Button
                type="submit"
                theme="secondary"
                disabled={this.state.top === null || this.state.dress === null || this.state.bottom === null || this.state.shoes === null || this.state.isLoading}
              >
                <Icon size={1.2} style={{ color: white }}>
                </Icon>
                Save Preferences
              </Button>
            </div>
          </form>
        )}
        {this.state.isComplete && (
          <section style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-around',
            alignItems: 'center',
            boxShadow: level3, 
            width: '60%', 
            height: '520px',
            marginTop: '80px',
            padding: '1.5em'}}>
            <H2>Your Style Is...</H2>
            <Tile style={{ boxShadow: level1}}  width={'50%'} height={'50%'} image={`${ APP_URL }/images/styles/style-results/${this.getStyleResult()}.jpg`} />
            <H3 style={{fontFamily: secondary, fontSize: '6em'}}>{this.props.user.details.stylePreference}</H3>
            <Link to={user.subscriptions.path}>
              <Button theme="secondary" style={{ marginTop: "1em"}}>
                <Icon size={1.2} style={{ color: white }}></Icon>My
                Subscriptions
              </Button>
            </Link>
          </section>
        )}
      </section>
    );
  }
}

// Component State
function profileState(state) {
  return {
    user: state.user,
  };
}

export default connect(profileState, { updateStylePreference, messageHide, messageShow })(
  StylePreferences
);
