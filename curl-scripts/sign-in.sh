# sh curl-scripts/json/sign-in.sh

curl 'https://tic-tac-toe-wdi.herokuapp.com/' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data ''

echo

# // production: 'https://aqueous-atoll-85096.herokuapp.com',
# // development: 'https://tic-tac-toe-wdi.herokuapp.com/'
