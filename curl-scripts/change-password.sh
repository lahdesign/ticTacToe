sh curl-scripts/change-password.sh

curl --include --request PATCH https://tic-tac-toe-wdi.herokuapp.com/change-password/ \
 --header "Authorization: Token token=${TOKEN}" \
 --header "Content-Type: application/json" \
 --data '{
   "passwords": {
     "old": "'"${OLD_PASSWORD}"'",
     "new": "'"${NEW_PASSWORD}"'"
   }
 }'

# $ OLD_PASSWORD="123" NEW_PASSWORD="124" TOKEN="BAhJIiU4NTgzYTYxODFlYmZiNGE2NDJlNjU1YjZjNTE0OTZmZQY6BkVG--61ea8507c4cc4eed2205a964cdaf9c56a243503c" sh curl-scripts/change-password.sh
