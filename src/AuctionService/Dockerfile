FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
EXPOSE 80
# copy all .csproj files and restore as distinct layer. Use of the same COPY command 
# for every dockerfile in the project to take advantages of docker caching
COPY Carsties.sln Carsties.sln
COPY src/AuctionService/AuctionService.csproj src/AuctionService/AuctionService.csproj
COPY src/SearchService/SearchService.csproj src/SearchService/SearchService.csproj 
COPY src/GatewayService/GatewayService.csproj src/GatewayService/GatewayService.csproj
COPY src/Contracts/Contracts.csproj src/Contracts/Contracts.csproj
COPY src/IdentityService/IdentityService.csproj src/IdentityService/IdentityService.csproj
# Restore Package deps
RUN dotnet restore Carsties.sln
# copy the app folders
COPY src/AuctionService src/AuctionService
COPY src/Contracts src/Contracts
WORKDIR /app/src/AuctionService
RUN dotnet publish -c Release -o /app/src/out
# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
COPY --from=build /app/src/out .
ENTRYPOINT ["dotnet", "AuctionService.dll"]



#FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
#USER $APP_UID
#WORKDIR /app
#EXPOSE 8080
#EXPOSE 8081
#
#FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
#ARG BUILD_CONFIGURATION=Release
#WORKDIR /src
#COPY ["src/AuctionService/AuctionService.csproj", "src/AuctionService/"]
#COPY ["src/Contracts/Contracts.csproj", "src/Contracts/"]
#RUN dotnet restore "src/AuctionService/AuctionService.csproj"
#COPY . .
#WORKDIR "/src/src/AuctionService"
#RUN dotnet build "AuctionService.csproj" -c $BUILD_CONFIGURATION -o /app/build
#
#FROM build AS publish
#ARG BUILD_CONFIGURATION=Release
#RUN dotnet publish "AuctionService.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false
#
#FROM base AS final
#WORKDIR /app
#COPY --from=publish /app/publish .
#ENTRYPOINT ["dotnet", "AuctionService.dll"]
