import { Text } from "./index";
import {
  customRender,
  screen,
} from "@alura/test-commons/react-testing-library";

const render = customRender();

describe("<Text />", () => {
  it("renders h1", () => {
    const { container } = render(<Text tag="h1">Sample text</Text>);
    // screen.debug();
    expect(container).toMatchSnapshot();
  });
});
