import React, {Component} from 'react';
import { Layout, Card, Page, TextStyle } from "@shopify/polaris";
class Example extends Component {
  render() {
    return(
  <Page>
    <Layout>
      <Layout.AnnotatedSection title="Example Page Title" description="This is example Page discription">
        <Card>
          <div><TextStyle variation="strong">Example Page</TextStyle></div>
        </Card>
      </Layout.AnnotatedSection>
    </Layout>
  </Page>
    );
  };
};

export default Example;