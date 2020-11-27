import { mount } from "@vue/test-utils";
import Button from "../../src/components/Button.vue";
describe("Button", () => {
  test("disabled", () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true,
      },
    });

    wrapper.find("[data-testid='btn']").trigger("click");
    expect(wrapper.emitted("click")).toBeFalsy();
  });

  // todo
  // 测试 button slot 显示的内容

  test("slot ", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "<div>默认按钮</div>",
      },
    });

    expect(wrapper.text()).toBe("默认按钮");
  });

  // 测试 button 点击的时候发出 click 自定义事件

  it("should emit click event when clicked ", async () => {
    const wrapper = mount(Button);

    await wrapper.find("[data-testid='btn']").trigger("click");

    console.log(wrapper.text());
    expect(wrapper.emitted("click")).toBeTruthy();
  });
});
