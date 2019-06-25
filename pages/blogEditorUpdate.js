import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";

import SlateEditor from "../components/slate-editor/Editor";
import { toast } from "react-toastify";
import { getBlogById, updateBlog } from "../actions";

class BlogEditorUpdate extends React.Component {
  static async getInitialProps({ query }) {
    const blogId = query.id;
    let blog = {};

    try {
      blog = await getBlogById(blogId);
    } catch (err) {
      //  return { err };
      console.error(err);
    }
    return { blog };
  }

  constructor(props) {
    super(props);

    this.state = {
      isSaving: false
    };

    this.updateBlog = this.updateBlog.bind(this);
  }

  updateBlog(story, heading) {
    const { blog } = this.props;
    const updatedBlog = {};
    //  blogId = this.props.blog._id;
    updatedBlog.title = heading.title;
    updatedBlog.subTitle = heading.subtitle;
    updatedBlog.story = story;

    this.setState({ isSaving: true });

    updateBlog(updatedBlog, blog._id)
      .then(updatedBlog => {
        toast.success("blog saved successfully");
        this.setState({ isSaving: false });
      })
      .catch(err => {
        this.setState({ isSaving: false });
        const message = err.message || "Server Error";
        toast.error(
          "Unexpected error, copy your progress and refresh your browser"
        );
        console.error(message);
      });
  }

  // saveBlog(story, heading) {
  //   const blog = {};
  //   blog.title = heading.title;
  //   blog.subTitle = heading.subtitle;
  //   blog.story = story;
  //
  //   this.setState({ isSaving: true });
  //
  //   createBlog()
  //     .then(data => {
  //       this.setState({ isSaving: false });
  //       console.log(data);
  //     })
  //     .catch(err => {
  //       this.setState({ isSaving: false });
  //       const message = err.message || "Server Error";
  //       console.error(message);
  //       //  setSubmitting(false);
  //
  //       // this.setState({ error });
  //     });
  // }

  render() {
    const { blog } = this.props;
    const { isSaving } = this.state;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <SlateEditor
            initialValue={blog.story}
            isLoading={isSaving}
            save={this.updateBlog}
          />
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(BlogEditorUpdate);
