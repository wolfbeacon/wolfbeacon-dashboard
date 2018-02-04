import React, { Component } from 'react';
import TagInput from './tagInput';

export default class JoinTheTeam extends Component {

  constructor(props) {
    super(props);
    this.state = {
      level: "",
      shirt: "",
      diet: "",
      gender: ""
    }
  }

  render() {
    return (

      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Join the team!
            </h1>
            <h2 className="subtitle">
              Our fam is lit <span role="img" aria-label="flame">🔥</span>
            </h2>
          </div>

          <div className="columns">
            <div className="column is-6 is-offset-3">
              <div className="box">

                <div className="field">
                  <p className="control">
                    <input className="input" name="first_name" type="text" placeholder="First Name" maxLength="150"/>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="last_name" type="text" placeholder="Last Name" maxLength="150"/>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="username" type="text" placeholder="Username" maxLength="50"/>
                  </p>
                </div>

                <div className="select is-fullwidth">
                  <select value={this.state.gender} name="gender">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="email" type="email" placeholder="Email"/>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="phone_number" type="tel" placeholder="Phone Number"/>
                  </p>
                </div>

                <div className="select is-fullwidth">
                  <select value={this.state.level} name="level_of_study">
                    <option value="">Level of Study</option>
                    <option value="high-school">High School</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate</option>
                    <option value="doctoral">Doctoral</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="major_of_study" type="text" placeholder="College Major" maxLength="150"/>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="school_last_attended" type="text" placeholder="Educational Institution Attended" maxLength="150"/>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="graduation_year" type="number" placeholder="Year of Graduation" min="1950" max="2030"/>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="graduation_month" type="number" placeholder="Month of Graduation" min="1" max="12"/>
                  </p>
                </div>

                <div className="select is-fullwidth">
                  <select value={this.state.shirt} name="tshirt_size">
                    <option value="">T-Shirt Size</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="country" type="text" placeholder="Country" maxLength="150"/>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="city" type="text" placeholder="City" maxLength="150"/>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="pincode" type="number" placeholder="Pincode"/>
                  </p>
                </div>

                <div className="field">
                  <p className="control">
                    <input className="input" name="birthday" type="date" placeholder="Date of Birth"/>
                  </p>
                </div>

                <div className="select is-fullwidth">
                  <select value={this.state.diet} name="dietary_restrictions">
                    <option value="">Dietary Restrictions</option>
                    <option value="halal">Halal</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten</option>
                    <option value="lactose-intolerant">Lactose Intolerant</option>
                    <option value="none">None</option>
                  </select>
                </div>

                <label className="label">List of Technology sub categories Interested In</label>
                <TagInput inputName="technical_interests"/>

                <label className="label">Special Accommodations Required</label>
                <textarea className="textarea" name="special_accomodations" placeholder=""></textarea>

                <label className="label">About You</label>
                <textarea className="textarea" name="about_me"></textarea>

              </div>
            </div>
          </div>

        </div>
      </section>

    )
  }
}