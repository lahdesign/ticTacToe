# ID=2 TOKEN=tokengoeshere sh curl-scripts/examples/destroy.sh

curl 'https://tic-tac-toe-wdi.herokuapp.com/' \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
