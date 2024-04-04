# Login to your Azure account
Connect-AzAccount

# Create a resource group
New-AzResourceGroup -Name <YourResourceGroupName> -Location <YourLocation>

# Create a storage account
New-AzStorageAccount -ResourceGroupName <YourResourceGroupName> -Name <YourStorageAccountName> -Location <YourLocation> -SkuName Standard_LRS -Kind StorageV2