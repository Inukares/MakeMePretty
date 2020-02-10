import { UserModel, User } from "./user"

test("can be created", () => {
  const instance: User = UserModel.create({ name: 'Bob', password: 'xyz' })

  expect(instance).toBeTruthy()
})
