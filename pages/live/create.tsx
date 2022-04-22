import type { NextPage } from "next";
import Input from "../../components";
import Button from "../../components/button";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="Go Live">
      <form className="space-y-4 px-4 py-10">
        <Input required label="Name" name="name" type="text" />

        <Input
          required
          label="Price"
          name="price"
          placeholder="0.00"
          type="text"
          kind="price"
        />

        <TextArea label="Description" name="description" />
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default Create;
