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

import { updateStylePreference } from "./api/actions";
import user from "../../setup/routes/user";

class StylePreferences extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
      isLoading: false,
      top: null,
      dress: null,
      bottom: null,
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
    this.setState({ isComplete: true });
  };

  pointSystem = () => {
    let sum =
      Number(this.state.dress) +
      Number(this.state.top) +
      Number(this.state.bottom);
    if (sum <= 3) {
      return "Laidback";
    } else if (sum === 4 || sum === 5 || sum === 6) {
      return "Smart Casual";
    } else if (sum > 6) {
      return "Sophisticated";
    }
  };

  render() {
    return (
      <section>
        {!this.state.isComplete && (
          <form onSubmit={this.onSubmit}>
            <H3>Dresses</H3>
            <Input
              type="radio"
              id="dressCasual"
              name="dress"
              value="1"
              onChange={this.onChange}
            />
            <label for="dressCasual">Casual</label>
            <Input
              type="radio"
              id="dressStreet"
              name="dress"
              value="2"
              onChange={this.onChange}
            />
            <label for="dressStreet">Street</label>
            <Input
              type="radio"
              id="dressProfessional"
              name="dress"
              value="3"
              onChange={this.onChange}
            />
            <label for="dressProfessional">Professional</label>

            <H3>Tops</H3>
            <Input
              type="radio"
              id="topCasual"
              name="top"
              value="1"
              onChange={this.onChange}
            />
            <label for="topCasual">Casual</label>
            <Input
              type="radio"
              id="topStreet"
              name="top"
              value="2"
              onChange={this.onChange}
            />
            <label for="topStreet">Street</label>
            <Input
              type="radio"
              id="topProfessional"
              name="top"
              value="3"
              onChange={this.onChange}
            />
            <label for="topProfessional">Professional</label>

            <H3>Bottoms</H3>
            <Input
              type="radio"
              id="bottomCasual"
              name="bottom"
              value="1"
              onChange={this.onChange}
            />
            <label for="bottomCasual">Casual</label>
            <Input
              type="radio"
              id="bottomStreet"
              name="bottom"
              value="2"
              onChange={this.onChange}
            />
            <label for="bottomStreet">Street</label>
            <Input
              type="radio"
              id="bottomProfessional"
              name="bottom"
              value="3"
              onChange={this.onChange}
            />
            <label for="bottomProfessional">Professional</label>
            <div>
              <Button
                type="submit"
                theme="secondary"
                disabled={this.state.isLoading}
              >
                <Icon size={1.2} style={{ color: white }}>
                  check
                </Icon>
                Save Preferences
              </Button>
            </div>
          </form>
        )}
        {this.state.isComplete && (
          <section>
            <H2>Your Style Is...</H2>
            <H3>{this.props.user.details.stylePreference}</H3>
            <Link to={user.subscriptions.path}>
              <Button theme="secondary" style={{ marginTop: "1em" }}>
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

export default connect(profileState, { updateStylePreference })(
  StylePreferences
);
