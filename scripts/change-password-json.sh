# ID=99 OLD_PASSWORD=ryan NEW_PASSWORD=agnew TOKEN=BAhJIiU1NzkzOTVkMTVhMGQ1ZTM2ZjQ5MDMyOWRiZDkzNTJiNgY6BkVG--c6df93048f4596e6cae3d0c9e2667b1b0336ac7a sh scripts/change-password-json.sh

# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'


echo
