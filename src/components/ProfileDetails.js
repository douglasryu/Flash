import React from "react";
import { connect } from "react-redux";


const ProfileDetails = props => {
    const transactions = Object.values(props.transactions);
    if (transactions.length === 0) return null;

    const transactionArray = [];
    transactions.forEach(transaction => transactionArray.push(transaction.products))

    const productsObj = props.productsList;

    const displayName = props.firstName === "demo" ? "Guest" : props.firstName === "null" ? "" : `${props.firstName} ${props.lastName}.`;

    return (
        <>
            <div className="profile__userinfo">
                <div className="profile__userwrap">
                    <img className="profile__pic" src={require("../assets/camera.png")} alt="profile-logo" />
                    <div className="profile__username">{displayName}</div>
                </div>
                <div className="profile__since">Flash member since 2020</div>
            </div>
            <div className="profile__orderinfo">
                <div className="profile__orders">Recent Orders</div>
                {transactionArray.map((transaction, i) => {
                    return (
                        <div key={i} className="profile__transaction">
                            {transaction.map(instance => {
                                return (
                                    <div key={instance}>
                                        <div className="profile__product--name">{productsObj[instance].name}</div>
                                        <img className="profile__product--image" src={productsObj[instance].imgUrl} alt="profile-img" />
                                    </div>
                                );
                            })}
                            <div className="profile__transaction--price">Total: ${(transactions[i].total / 100).toFixed(2)}</div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}


const mapStateToProps = state => {
    return {
        transactions: state.transactions,
        productsList: state.products,
        firstName: state.session.firstName,
        lastName: state.session.lastName
    };
};

export default connect(
    mapStateToProps,
    null
)(
    ProfileDetails
);