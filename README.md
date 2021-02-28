# Html5 Boilerplate for Dfinity 

# Install Nodejs
- sudo apt install curl
- curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
- sudo apt install nodejs

# Install Dfinity sdk
- sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"

# Clone the Repo 
- git clone https://github.com/garyjs/dfinity-comming-soon-html5-boilerplate.git
- cd dfinity-comming-soon-html5-boilerplate
- npm install 

# Deploy to Dfinity network
- dfx deploy --network=ic
- To browse the deployed app append ic0.app to your assets_canister id ie
- canister id: "teog5-mqaaa-aaaab-qaija-cai" would become https://teog5-mqaaa-aaaab-qaija-cai.ic0.app/
