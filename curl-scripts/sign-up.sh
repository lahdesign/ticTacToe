# sh curl-scripts/json/sign-up.sh

curl "https://wdi-library-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data ''

echo
