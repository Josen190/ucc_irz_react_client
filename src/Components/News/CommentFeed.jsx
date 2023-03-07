import React, {Component} from "react";
import API, { url_get_comments } from "../../api/Api";
import Comment from "./Comment";

export default class CommentFeed extends Component {
  constructor(props) {
    super(props);

    this.state = { commentArr: [] };
  }

  componentDidMount() {
    API.get(url_get_comments, { params: { newsEntryId: this.props.newsID } })
      .then((response) => {
        let commentArr = [];
        response.data.forEach((element, index) => {
          commentArr.push(<Comment key={index} data={element} />);
        });
        this.setState({ commentArr: commentArr });
      })
      .catch((error) => {});
  }

  render() {
    return <div className="column">{this.state.commentArr}</div>;
  }
}

