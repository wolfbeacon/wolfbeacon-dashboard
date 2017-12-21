import React, { Component } from 'react';
import feather from 'feather-icons';
import $ from 'jquery';

class Jointheteam extends Component {

  render() {
    return (

      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Join the team!
            </h1>
            <h2 class="subtitle">
              Our fam is lit 🔥
            </h2>
          </div>

          <div class="columns">
            <div class="column is-4 is-offset-4">
              <div class="box">

                <div class="field">
                  <p class="control">
                    <input class="input" name="first_name" type="text" placeholder="First Name" maxlength="150"/>
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="last_name" type="text" placeholder="Last Name" maxlength="150"/>
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="username" type="text" placeholder="Username" maxlength="50"/>
                  </p>
                </div>

                <div class="select is-fullwidth">
                  <select name="gender">
                    <option selected>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="email" type="email" placeholder="Email"/>
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="phone_number" type="tel" placeholder="Phone Number"/>
                  </p>
                </div>

                <div class="select is-fullwidth">
                  <select name="level_of_study">
                    <option selected>Level of Study</option>
                    <option value="high-school">High School</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate</option>
                    <option value="doctoral">Doctoral</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="major_of_study" type="text" placeholder="College Major" maxlength="150"/>
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="school_last_attended" type="text" placeholder="Educational Institution Attended" maxlength="150"/>
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="graduation_year" type="number" placeholder="Year of Graduation" min="1950" max="2030"/>
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="graduation_month" type="number" placeholder="Month of Graduation" min="1" max="12"/>
                  </p>
                </div>

                <div class="select is-fullwidth">
                  <select name="tshirt_size">
                    <option selected>T-Shirt Size</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="country" type="text" placeholder="Country" maxlength="150"/>
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="city" type="text" placeholder="City" maxlength="150"/>
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="pincode" type="number" placeholder="Pincode"/>
                  </p>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="birthday" type="date" placeholder="Date of Birth"/>
                  </p>
                </div>

                <div class="select is-fullwidth">
                  <select name="dietary_restrictions">
                    <option selected>Dietary Restrictions</option>
                    <option value="halal">Halal</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten</option>
                    <option value="lactose-intolerant">Lactose Intolerant</option>
                    <option value="none">None</option>
                  </select>
                </div>

                <div class="field">
                  <p class="control">
                    <input class="input" name="technical_interests" type="text" placeholder="List of Technology sub categories Interested In"/>
                  </p>
                </div>

                <div class="field is-grouped is-grouped-multiline">

                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-info">Django</span>
                      <a class="tag is-delete"></a>
                    </div>
                  </div>

                  <div class="control">
                    <div class="tags has-addons">
                      <span class="tag is-info">ReactJS</span>
                      <a class="tag is-delete"></a>
                    </div>
                  </div>

                </div>

                <label class="label">Special Accommodations Required</label>
                <textarea class="textarea" name="special_accomodations" placeholder=""></textarea>

                <label class="label">About You</label>
                <textarea class="textarea" name="about_me"></textarea>

              </div>
            </div>
          </div>

        </div>
      </section>

    )
  }
}

export default Jointheteam;