import React, { useEffect } from "react";
import { connect } from "react-redux";
import CategoryBar from './CategoryBar'
import Navigation from "./Navigation";
import ProfileDetails from "./ProfileDetails";
import { fetchTransaction } from "../actions/transactionActions";

const ProfilePage = props => {
    const userId = props.userId;

    useEffect(() => {
        (async () => {
            await props.fetchTransaction(userId);
        })();
    });


    return (
        <>
            <Navigation />
            <CategoryBar />
            <ProfileDetails {...props} />
        </>
    );
}


const mapStateToProps = state => {
    return {
        userId: state.session.id
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTransaction: (userId) => dispatch(fetchTransaction(userId)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    ProfilePage
);
