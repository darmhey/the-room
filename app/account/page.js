import { auth } from "../_lib/auth";
export const metadata = {
  title: "Your Account",
};
export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);
  return <h1 className=" text-accent-400">Welcome, {firstName} </h1>;
}
