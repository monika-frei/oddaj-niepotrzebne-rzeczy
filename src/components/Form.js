import React, { Component } from "react";
import HomeContactForm from "./home/HomeContactForm";
import HomeFooter from "./home/HomeFooter";
import FormStepOne from "./form/FormStepOne";
import FormStepTwo from "./form/FormStepTwo";
import FormStepThree from "./form/FormStepThree";
import FormStepFour from "./form/FormStepFour";
import FormSum from "./form/FormSum";
import FormSuccess from "./form/FormSuccess";
import { sendForm } from "../store/actions/formActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FormButtons from "./form/FormButtons";
import MobileScrollBtn from "./menu/MobileScrollBtn";

class Form extends Component {
  state = {
    quantity: this.props.quantity,
    currentStep: 1,
    activeStep: "step step--active",
  };

  handleButtonNext = (e) => {
    e.preventDefault();
    this.setState({
      currentStep: this.state.currentStep + 1,
    });
  };

  handleButtonPrev = (e) => {
    e.preventDefault();
    this.setState({
      currentStep: this.state.currentStep - 1,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.props.formData.thingsToDonate !== [] &&
      this.props.formData.city.city !== "" &&
      this.props.formData.street.street !== "" &&
      this.props.formData.date.date !== "" &&
      this.props.formData.time.time !== "" &&
      this.props.formData.telNumber.telNumber !== null
    ) {
      this.props.sendForm(this.props.formData);
      this.setState({
        currentStep: 6,
      });
    } else {
      window.alert("uzupełnij brakujące dane");
    }
  };

  render() {
    // const { loggedUser } = this.props;
    // if (loggedUser.email === "") return <Redirect to='/zaloguj'></Redirect>

    const currentStep = this.state.currentStep;
    let formStep;

    switch (currentStep) {
      case 1:
        formStep = (
          <FormStepOne
            handleButtonNext={this.handleButtonNext}
            handleButtonPrev={this.handleButtonPrev}
          />
        );
        break;
      case 2:
        formStep = (
          <FormStepTwo
            handleButtonNext={this.handleButtonNext}
            handleButtonPrev={this.handleButtonPrev}
          />
        );
        break;
      case 3:
        formStep = (
          <FormStepThree
            handleButtonNext={this.handleButtonNext}
            handleButtonPrev={this.handleButtonPrev}
          />
        );
        break;
      case 4:
        formStep = (
          <FormStepFour
            handleButtonNext={this.handleButtonNext}
            handleButtonPrev={this.handleButtonPrev}
          />
        );
        break;
      case 5:
        formStep = (
          <FormSum
            handleButtonPrev={this.handleButtonPrev}
            handleSubmit={this.handleSubmit}
          />
        );
        break;
      case 6:
        formStep = <FormSuccess />;
        break;
      default:
        console.log("error");
    }

    return (
      <div className="form__container">
        <div className="form__header">
          <div className="form__header__info">
            <h1>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h1>
            <div className="decoration__line"></div>
            <h2>Wystarczą 4 proste kroki:</h2>
            <div className="form__steps">
              <div className="step__box">
                <h3>1</h3>
                <p>Wybierz rzeczy</p>
              </div>
              <div className="step__box">
                <h3>2</h3>
                <p>Spakuj je w worki</p>
              </div>
              <div className="step__box">
                <h3>3</h3>
                <p>Wybierz fundację</p>
              </div>
              <div className="step__box">
                <h3>4</h3>
                <p>Zamów kuriera</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form__header__steps">
          <div
            className={
              this.state.currentStep === 1 ? this.state.activeStep : "step"
            }
          >
            1
          </div>
          <div
            className={
              this.state.currentStep === 2 ? this.state.activeStep : "step"
            }
          >
            2
          </div>
          <div
            className={
              this.state.currentStep === 3 ? this.state.activeStep : "step"
            }
          >
            3
          </div>
          <div
            className={
              this.state.currentStep === 4 ? this.state.activeStep : "step"
            }
          >
            4
          </div>
        </div>
        <div className="important__info">
          <h2>Ważne!</h2>
          <p>
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać.
          </p>
        </div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>{formStep}</form>
          <FormButtons
            handleButtonNext={this.handleButtonNext}
            handleButtonPrev={this.handleButtonPrev}
            currentStep={this.state.currentStep}
            handleSubmit={this.handleSubmit}
          />
        </div>
        <HomeContactForm />
        <HomeFooter />
        <MobileScrollBtn />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formData: state.formData,
    loggedUser: state.loggedUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendForm: (form) => dispatch(sendForm(form)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
