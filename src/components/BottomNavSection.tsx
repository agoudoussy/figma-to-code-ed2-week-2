import Button from "UI/Button";
import Container from "UI/Container/Container";
import Flex from "UI/Flex";
import MenuItem from "UI/MenuItem";

function BottomNavSection() {
  return (
    <footer className="mt-auto flex w-full">
      <Flex className=" w-full py-[2.6rem] lg:py-[5.2rem]  bg-black text-white">
        <Container>
          <Flex className=" space-y-[3.2rem]">
            <Flex
              row
              className=" justify-between flex-col space-y-[2rem] lg:space-y-0 lg:flex-row"
            >
              <div className=" space-y-[2rem]">
                <h2 className="text-[3rem]">BALLAMAS</h2>
                <div className=" space-y-[1.6rem]">
                  <p className=" text-[#C3C3C3]">
                    Subscribe to our newsletter for upcoming products and best
                    discount for all items
                  </p>
                  <Flex row className="space-x-[0.8rem]">
                    <div className="p-[1.4rem] border-[1px] border-white w-full lg:w-[316px] rounded-full">
                      <input
                        placeholder="your email"
                        className="text-[1.2rem] bg-transparent"
                      />
                    </div>
                    <Button variant="secondary" text="Subscribe" />
                  </Flex>
                </div>
              </div>

              <Flex row className=" space-x-[5.2rem]">
                <Flex className=" space-y-[0.8rem]">
                  <h3 className="">Product</h3>
                  <Flex className=" space-y-[0.2rem]">
                    <MenuItem
                      libelle="Jacket"
                      className=" footer-menu-item"
                      path={""}
                    />
                    <MenuItem
                      libelle="T-Shirt"
                      className=" footer-menu-item"
                      path={""}
                    />
                    <MenuItem
                      libelle="Jacket"
                      className=" footer-menu-item"
                      path={""}
                    />
                    <MenuItem
                      libelle="Shoes"
                      className=" footer-menu-item"
                      path={""}
                    />
                    <MenuItem
                      libelle="Sunglasses"
                      className=" footer-menu-item"
                      path={""}
                    />
                  </Flex>
                </Flex>

                <Flex className=" space-y-[0.8rem]">
                  <h3 className="">Categories</h3>
                  <Flex className=" space-y-[0.2rem]">
                    <MenuItem
                      libelle="Man"
                      className=" footer-menu-item"
                      path={""}
                    />
                    <MenuItem
                      libelle="Woman"
                      className=" footer-menu-item"
                      path={""}
                    />
                    <MenuItem
                      libelle="Kids"
                      className=" footer-menu-item"
                      path={""}
                    />
                    <MenuItem
                      libelle="Gift"
                      className=" footer-menu-item"
                      path={""}
                    />
                    <MenuItem
                      libelle="New arrival"
                      className=" footer-menu-item"
                      path={""}
                    />
                  </Flex>
                </Flex>

                <Flex className=" space-y-[0.8rem]">
                  <h3 className="">Our social Media</h3>
                  <Flex className=" space-y-[0.2rem]">
                    <MenuItem
                      libelle="Instagram"
                      className=" footer-menu-item"
                      path={""}
                    />
                    <MenuItem
                      libelle="Facebook"
                      className=" footer-menu-item"
                      path={""}
                    />
                    <MenuItem
                      libelle="Youtube"
                      className=" footer-menu-item"
                      path={""}
                    />
                    <MenuItem
                      libelle="X"
                      className=" footer-menu-item"
                      path={""}
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <p className=" text-[#7E7E7E] w-full text-center">
              BALLAMAS 2024 by <span className=" underline">Waris</span>
            </p>
          </Flex>
        </Container>
      </Flex>
    </footer>
  );
}

export default BottomNavSection;
