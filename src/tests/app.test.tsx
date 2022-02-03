/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from "@testing-library/react";
import App from "../components/app";

describe("when render app", () => {
  it("should render app", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
