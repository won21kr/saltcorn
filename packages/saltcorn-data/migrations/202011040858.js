const js = async ({ Table, Field, schema }) => {
  const users = await Table.findOne({ name: "users" });
  //console.log({ users });
  //const ufields = await users.getFields();
  //console.log(ufields);
  const email = await Field.findOne({ table_id: users.id, name: "email" });
  // console.log({ email });
  await email.update({ required: true, is_unique: true });
};

module.exports = { js, not_in_transaction: true };
