workflow "Run Jest" {
  on       = "push"

  resolves = [
    "test"
  ]
}

action "test" {
  uses = "actions/npm@master"
  args = "t"
}
