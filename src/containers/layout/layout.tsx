import * as React from 'react';
import * as classes from './layout.scss';
import Counter from 'src/components/counter';

class Layout extends React.Component {

    private menu = [{
        id: 1,
        name: "Men",
        url: ""
    },
        {
            id: 2,
            name: "Women",
            url: ""
        },
        {
            id: 3,
            name: "Admin",
            url: ""
        },
        {
            id: 4,
            name: "Offers",
            url: ""
        }];
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <>
                <div className={"row " + classes.topBanner}>
                    <div className="offset-md-2" />
                    <div className="col-12 col-md-8 d-flex justify-content-between align-items-center">
                        <div className="px-3">
                            <i className="fa fa-facebook-square" />
                            <i className="fa fa-twitter-square" />
                            <i className="fa fa-linkedin-square" />
                            <i className="fa fa-youtube-play" />
                        </div>
                        <div>
                            Custom care: +91 99999 99999, Email: customercare@shopingsite.com
                            </div>
                        <div className="px-3">
                            <div className={"mr-4 d-inline-block p-1" + classes.linkButtons}>
                                <i className="fa fa-lock pr-2" /> Login
                            </div>
                            <div className={"d-inline-block p-1" + classes.linkButtons}>
                                <i className="fa fa-user pr-2" /> Sign up
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-2" />
                    <div className="col-12 col-md-8 d-flex justify-content-between align-items-center">
                        <div className={classes.appName}> Shoping site</div>
                        {this.menu.map(x => {
                            return(
                                <div key={x.id} className={classes.menuLink}>{x.name}</div>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default Layout;
