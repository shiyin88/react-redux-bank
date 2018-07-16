import React from 'react';
import { connect } from 'react-redux';
import { onDeposit, onWithdrawl, setName, setAge } from '../actions';
import { BankComponent } from '../components/bankComponents';
import { UserComponents } from '../components/userComponents';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <BankComponent
                    deposit = {() => this.props.onDeposit(10)}
                    withdraw = {() => this.props.onWithdrawl(2)}
                    balance = {this.props.bank.lastValue}
                    totalValue = {this.props.bank.result}/>
                <UserComponents
                    changeUsername={() => this.props.setName("Bob")}
                    changeAge={() => this.props.setAge(25)}
                    username={this.props.user.name}
                    age={this.props.user.age}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
   return {
        user: state.user,
        bank: state.bank,
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeposit: (amount) => dispatch(onDeposit(amount)),
        onWithdrawl: (amount) => dispatch(onWithdrawl(amount)),
        setName: (name) => dispatch(setName(name)),
        setAge: (age) => dispatch(setAge(age)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);