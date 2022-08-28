import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Flex, Image, Input, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import {ChevronRightIcon} from "@chakra-ui/icons"
import img from "../Img/champimg.jpg"

import styles from "./Payment.module.css"
import Paynow from './Paynow'
const Payment = () => {
  return (
  <Box className={styles.over} >
    {/* // pos="fixed"  left="0" h="100vh" pos="fixed"*/}
    <Flex  >
    <Box p="20px" w="25%"     className={styles.scrool} >
        <Flex >
        <Image  boxSize='35px' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi4zMzggMjkuNTQ5bC0uMDAxLS4wMDNjLS4wNDkgMC0uMDguMDAzLS4wOC4wMDNzLS4xNS0uNjAzLS4zMzItMS4xODdjLS4xODItLjU4My0uMzczLS45NDctLjM3My0uOTQ3bC4xMTMtLjE3NC0uMDAyLS4wMDRjLjYxNy0xLjAyLjYzMi0xLjg5Mi41MzUtMi40NDZhMy4zNjMgMy4zNjMgMCAwMC0uOTM4LTEuODQ4bC0uMDI3LS4wMjdjLS43MzQtLjcxOS0xLjc1My0xLjIyMy0zLjQwOC0xLjY4OC0uMTktLjA1My0uMzU5LS4wOTctLjUwOC0uMTM1YTE0LjQ4IDE0LjQ4IDAgMDEtLjM2LS4xMDZsLS4wMTUtLjEyOWMtLjAwNi0uNDM3LS4wMzEtMS45MTgtLjA2OS0yLjc4Mi0uMDI3LS42MjQtLjA4MS0xLjU5OC0uMzgzLTIuNTU4LS4zNi0xLjI5OS0uOTg4LTIuNDM2LTEuNzcyLTMuMTYzIDIuMTYyLTIuMjQxIDMuNTEyLTQuNzEgMy41MS02LjgyOS0uMDA3LTQuMDc0LTUuMDEtNS4zMDYtMTEuMTc2LTIuNzUzbC0uMDE5LjAwOGE5Ljg2NiA5Ljg2NiAwIDAwLTEuMjU5LjUzM2wtLjAyOC4wMTNBMTMwOC4yIDEzMDguMiAwIDAwMjMuMzQ5Ljk4Yy03LjAzLTYuMTMxLTI5LjAwOCAxOC4yOTgtMjEuOTggMjQuMjMybDEuNTM1IDEuM2MtLjM5OCAxLjAzMi0uNTU1IDIuMjE1LS40MjcgMy40ODYuMTY0IDEuNjMzIDEuMDA2IDMuMTk4IDIuMzcxIDQuNDA4IDEuMjk2IDEuMTQ4IDIuOTMgMS44MyA0LjQ5IDEuODcybC4xMzcuMDAySDkuNTAyYzIuNzM0IDYuMyA4LjgwOCAxMC4wMTcgMTYuMDE2IDEwLjM3MmwuMjg1LjAxMnYuMDAyaC4wMDd2LS4wMDJjNy43MTQuMjczIDE0LjQ1NC0zLjQ1NCAxNy4yMTktMTAuMDc4LjM0OC0uODk2IDIuMjktNi4yNzUtLjY5MS03LjAzNnptLTMyLjIzMiA0Ljk2Yy0uMjM5LjA0LS40ODIuMDU2LS43MjguMDUtMi4zNzMtLjA2My00LjkzNy0yLjItNS4xOTItNC43MzQtLjI4MS0yLjggMS4xNS00Ljk1NiAzLjY4NC01LjQ2N2E0LjMxMyA0LjMxMyAwIDAxMS4wNjQtLjA3NmMxLjQyLjA3OCAzLjUxMSAxLjE2OCAzLjk5IDQuMjYuNDIzIDIuNzQtLjI1IDUuNTI4LTIuODE4IDUuOTY2em0tMi42Ni0xMS44MjVsLjAxLS4wMDJjMS45NTMtNS4zNDcgNS4zNi0xMC4zNTYgOS43OTgtMTMuNzczLjA4NC0uMDcuMTctLjE0LjI2LS4yMSAyLjE4Ny0xLjc4NSA0LjQyOC0zLjMwNSA2LjU4NS00LjUwOCAwIDAtMS45MTMtMi4yMTgtMi40OS0yLjM4MUMxOC4wNTYuODUgMTAuMzggNi4xNDMgNS40NzkgMTMuMTM2Yy0xLjk4MiAyLjgzLTQuODIgNy44NC0zLjQ2MyAxMC40MTguMTY3LjMyIDEuMTE0IDEuMTQgMS42MjIgMS41NjQuODUtMS4yMzUgMi4xNS0yLjEgMy44MDgtMi40MzR6bTkuMDQtOS41NTNjMS43NDYtMi4wMjMgMy45LTMuNzgzIDUuODI5LTQuNzcuMDY2LS4wMzQuMTM3LjAzOC4xLjEwMy0uMTUzLjI4LS40NS44NzgtLjU0MSAxLjMyOC0uMDEzLjA2Ni4wNi4xMTQuMTE2LjA3NiAxLjE5OC0uODE4IDMuMzY0LTEuNTQ4IDUuMTk1LTEuNjU2LjA3OC0uMDA1LjExMS4wOTguMDQ1LjE0LS4yODUuMTc3LS43MjkuNDgyLS45MzIuNzc4YS4wNzYuMDc2IDAgMDAuMDU1LjExOWMxLjI2OC4xMTcgMy4wNjcuNDUgNC4zMjUgMS4wNDYuMDgyLjAzOS4wMzguMTYyLS4wNS4xNDItMS43NzctLjQxLTQuNzA1LS43MjctNy43NDYuMDE1LTIuNzE3LjY2My00Ljc4OCAxLjY4OS02LjI5NSAyLjc5LS4wNzIuMDUzLS4xNi0uMDQzLS4xMDEtLjExek0zOS42NCAzOC4wOTJjMS40NzctMS41NDMgMi4zNTYtMy4yMjEgMi42OTctNS4yODkuMTY4LTEuMTA2LS4wNzgtMS41MzQtLjQxMi0xLjc0LS4zNTQtLjIxOC0uNzc4LS4xNDItLjc3OC0uMTQycy0uMTkzLTEuMzI0LS43NC0yLjUyNmMtMS42MjMgMS4yOC0zLjcxMiAyLjE4LTUuMzAzIDIuNjM3LTEuODM2LjUyNy00LjMyLjkzMi03LjA5MS43NjctLjMwMi0uMDI0LS41ODQtLjA2MS0uODQ1LS4wOTUtMS4wNjgtLjE0LTEuNzg1LS4yMzQtMi4wOTMuNzY1YTUuMTM3IDUuMTM3IDAgMDAuMjkyLjExYy4xNDMuMDQ4LjI5LjA5My40MzguMTM1YTE1LjAzMSAxNS4wMzEgMCAwMDEuODIuNDAxYy4zMDguMDQ5LjYxNy4wOTMuOTI4LjEyNWExNC41MDMgMTQuNTAzIDAgMDAxLjQwMi4wOCAxMy4wOTIgMTMuMDkyIDAgMDAxLjExNS0uMDJjLjA5OC0uMDA0LjE5Ni0uMDA4LjI5NC0uMDE0LjMxMy0uMDIyLjYyNi0uMDUuOTQyLS4wODFhLjEzMS4xMzEgMCAwMS4wNjQuMjVsLS4wMDkuMDA0Yy0uMzAyLjEyOC0uNjE1LjIzLS45MzMuMzFhOC4zODQgOC4zODQgMCAwMS0xLjQ1Ny4yMjYgMTQuNDEgMTQuNDEgMCAwMS0xLjQ3Ny4wMTkgMTMuODIyIDEzLjgyMiAwIDAxLS45ODMtLjA3NiAxNS43NDUgMTUuNzQ1IDAgMDEtMS40Ni0uMjQ3IDEwLjA3NiAxMC4wNzYgMCAwMS0xLjA3NC0uMzA3Yy4xMjUgMS4wNjQgMS4xNjIgMS41NDEgMS42NTggMS43MzRhNy40NzggNy40NzggMCAwMDEuMzA2LjM1NGM1LjYyLjk2NyAxMC44NzUtMi4yNDYgMTIuMDU4LTMuMDU2LjA4OC0uMDYuMTQ3LS4wMDEuMDc2LjEwNmExLjk2IDEuOTYgMCAwMS0uMTE2LjE2NWMtMS40NDggMS44NjgtNS4zNCA0LjAzLTEwLjQwNCA0LjAzLTIuMjEgMC00LjQxNy0uNzc5LTUuMjI3LTEuOTc0LTEuMjU4LTEuODU1LS4wNjItNC41NjMgMi4wMzMtNC4yODEuMDAyIDAgLjcxNy4wOC45MTguMTA0IDQuNDA4LjQ5MyA5LjczLS45NTkgMTIuMDk0LTMuMTQybC4xMTYtLjA4M2MuODE5LS43NzIgMS4yMzYtMS41NyAxLjEwMi0yLjI3MWExLjcgMS43IDAgMDAtLjQ5My0uOTY3Yy0uNTEzLS41MDMtMS4zMjgtLjg5NC0yLjcwMi0xLjI4bC0uMTE0LS4wMzItLjE0NS0uMDRjLS4zMi0uMDktLjU3LS4xNTktLjgzNS0uMjQ2LS41OS0uMTk0LS44ODItLjM1LS45NDgtMS40Ni0uMDMtLjQ4Ni0uMTE0LTIuMTc2LS4xNDQtMi44NzUtLjA1NC0xLjIyNC0uMjAxLTIuODk4LTEuMjQtMy41ODhhMS43NCAxLjc0IDAgMDAtLjg4Ny0uMjg0Yy0uMjU1LS4wMTItLjQwNS4wMjMtLjQ4NS4wNDJsLS4wNDIuMDFjLS41Ni4wOTQtLjkwNC4zODItMS4zMS43MmwtLjA3LjA2Yy0xLjI5NSAxLjA3OS0yLjM4OSAxLjI1NS0zLjYwNCAxLjIwMy0uMzgtLjAxNi0uNzctLjA1NC0xLjE4My0uMDk1LS4zNzgtLjAzNy0uNzc0LS4wNzYtMS4xOTctLjEwMWwtLjEtLjAwNmMtLjEzOS0uMDA4LS4yNzctLjAxNy0uNDE2LS4wMjQtMi4wMzYtLjEwNC00LjIyIDEuNjU1LTQuNTg0IDQuMTUzLS40MDUgMi43ODcgMS4xMzMgNC40OTQgMi4xMzMgNS42MDUuMjQ4LjI3NS40NjIuNTEzLjYwNy43MjJhLjc1Ni43NTYgMCAwMS0uMDYuOTdsLjAwMS4wMDFjLTIuMDc4IDIuMTM3LTIuNzQyIDUuNTMyLTEuOTYgOC4zNi4wOTkuMzU0LjIyMi42OTIuMzcgMS4wMTQgMS44MzYgNC4yOTQgNy41MzUgNi4yOTMgMTMuMTAzIDQuNDc0YTEzLjY3NyAxMy42NzcgMCAwMDIuMTE1LS44OTMgMTEuMTEyIDExLjExMiAwIDAwMy4yNC0yLjQyem0tNi41Ni0xNi4wMzdjLjM0LS4wNC42NjctLjA0Mi45NjcgMCAuMTczLS4zOTguMjAzLTEuMDg0LjA0Ny0xLjgzMS0uMjMyLTEuMTExLS41NDYtMS43ODMtMS4xOTUtMS42NzgtLjY1LjEwNC0uNjczLjkwOS0uNDQxIDIuMDIuMTMuNjI0LjM2MyAxLjE1OS42MjIgMS40OXptLTUuNTcyLjg4Yy0xLjAwMS0uNDMyLTEuNzc3LS41NjUtMy4yNC0uMDk0bC0uMTE1LjAzOGMtLjI5MS4wOTUtLjQ5NC4xNjEtLjYyMy4xNTVhLjI2LjI2IDAgMDEtLjA0LS4wMDVjLS4wNjktLjAxNC0uMTE2LS4wNTctLjEzLS4xMTktLjA0Mi0uMTkxLjI1My0uNTA3LjU2NC0uNzM0Ljk0LS42NzcgMi4xNi0uODIzIDMuMTg0LS4zODMuNS4yMTMuOTcxLjU5MyAxLjIuOTY3LjExMS4xODEuMTMzLjMyMS4wNjEuMzk1LS4xMTIuMTE4LS4zMzUuMDE3LS43NC0uMTY2aC0uMDAxbC0uMTItLjA1NXptLS45MzUuNTMyYy0uMDk0LjAxLS4xODEuMDMtLjI2Ni4wNWwtLjAwNi4wMDFhNC45NTIgNC45NTIgMCAwMS0uMDc1LjAxNyAyLjAxIDIuMDEgMCAwMC0uODA1LjQxM2MtLjE4My4xNi0uMjk2LjMzNi0uMjk1LjQ2IDAgLjA2LjAyNi4wOTMuMDQ2LjExLjAyOC4wMjUuMDYuMDM2LjEuMDM4LjA4My4wMDQuMTk2LS4wMzYuMzUxLS4wOWwuMDkxLS4wMzJhMy43NzcgMy43NzcgMCAwMTEuOTEtLjIwN2wuMDM4LjAwNWMuMjc5LjAzMy40NDcuMDUzLjUxNC0uMDUyLjAyLS4wMy4wNDQtLjA5NS0uMDE3LS4xOTMtLjE0Mi0uMjMtLjc1My0uNjE4LTEuNTg2LS41MnptNS42MzUgMS43OGMtLjE0Ny4zLS42LjM3OS0xLjAxLjE3Ny0uNDEtLjIwMi0uNjI0LS42MDgtLjQ3Ny0uOTA3LjE0Ny0uMy42LS4zOCAxLjAxLS4xNzcuNDEuMjAxLjYyNC42MDguNDc3LjkwN3ptMS42My0yLjEzYy0uMzMzLS4wMDYtLjYxLjM2LS42MTguODE4LS4wMDguNDU4LjI1Ny44MzMuNTkuODM5LjMzNC4wMDYuNjEtLjM2LjYxOC0uODE4LjAwOC0uNDU4LS4yNTYtLjgzMy0uNTktLjgzOXptLTIyLjc2MSA4LjIwOGMuMTMyLS4wMy4yNjgtLjA2Mi4zNTEuMDQyLjAzLjAzNC4wNzguMTEzLjAyMi4yNDItLjA5NS4yMi0uNDY4LjUyLTEuMDAyLjUtLjU1LS4wNDMtMS4xNi0uNDQzLTEuMjQ0LTEuNDM3LS4wNC0uNDkuMTQ1LTEuMDg5LjI2LTEuNDAxLjIyLS42MDUuMDItMS4yMzgtLjQ5Ni0xLjU3N2ExLjM0IDEuMzQgMCAwMC0xLjg1OC4zODdjLS4xNTguMjQ3LS4yNTUuNTU1LS4zMDYuNzItLjAxNC4wNDUtLjAyNS4wOC0uMDM0LjEwMi0uMTE2LjMxMy0uMzAyLjQwNS0uNDI3LjM4OC0uMDYtLjAwOC0uMTQyLS4wNDgtLjE5NC0uMTkxLS4xNDMtLjM5Mi0uMDI3LTEuNS43MS0yLjMxNGEyLjIzMyAyLjIzMyAwIDAxMS45MTUtLjY5Yy43NDIuMDk0IDEuMzU5LjU0MyAxLjczNyAxLjI2My41MDMuOTU4LjA1NSAxLjk2My0uMjEyIDIuNTYzbC0uMDA1LjAxYTguNSA4LjUgMCAwMC0uMDc0LjE2OWMtLjE2Ny4zOTgtLjE3Ni43NDYtLjAyNC45OC4xMTcuMTc5LjMyNC4yODQuNTcuMjg4LjExNC4wMDIuMjE4LS4wMjIuMzEtLjA0M2guMDAxeiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==' alt='image' />
        <Box>
       
        </Box>
        </Flex>
        <Box   p="20px 0px 0px 10px">
            <Flex align="center" gap="10px">
                <Box>
                <Image src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMiIgY3k9IjIyIiByPSIyMCIgZmlsbD0iIzAwN0M4OSIvPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjMzMSAzMS42NjlsNC4zLS44NkwzMS43NSAxNS42OXYtLjM3OGwtMy40NC0zLjA2MS0xNS4xMiAxNS4xMi0uODU5IDQuMjk5eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMjhsMSAxIDExLTExLTEtMS0xMSAxMXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNMjYgMTRsNCA0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMS41Ii8+PC9zdmc+' alt='img'/>
                
                </Box>
                <Text>Create</Text>
            </Flex>
        </Box>
        <Accordion allowToggle>
  <AccordionItem  style={{border:"none"}} pt="10px">
    <h2>
      <AccordionButton  >
        <Box flex='1' textAlign='left'>
     <Flex  gap="20px">
        <Image boxSize='25px' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQuNDY2IDYuNjE1YS43NS43NSAwIDAxMS4wNjEtLjAwNyAxLjc0NiAxLjc0NiAwIDAwMi40NDYgMCAuNzUuNzUgMCAxMTEuMDU0IDEuMDY3IDMuMjQ2IDMuMjQ2IDAgMDEtNC41NTQgMCAuNzUuNzUgMCAwMS0uMDA3LTEuMDZ6TTE1Ljk3IDE3LjQ3YS43NS43NSAwIDAxMS4wNiAwYy43MDcuNzA3IDEuNzMzLjcwNyAyLjQ0IDBhLjc1Ljc1IDAgMTExLjA2IDEuMDZjLTEuMjkzIDEuMjkzLTMuMjY3IDEuMjkzLTQuNTYgMGEuNzUuNzUgMCAwMTAtMS4wNnptLS4xOTMtMTEuODYyYS43NS43NSAwIDEwLTEuMDU0IDEuMDY3IDMuMjQ2IDMuMjQ2IDAgMDA0LjU1NCAwIC43NS43NSAwIDEwLTEuMDU0LTEuMDY3IDEuNzQ2IDEuNzQ2IDAgMDEtMi40NDYgMHpNMy43MTYgMTguNjE1YS43NS43NSAwIDAxMS4wNjEtLjAwNyAxLjc0NiAxLjc0NiAwIDAwMi40NDYgMCAuNzUuNzUgMCAxMTEuMDU0IDEuMDY3IDMuMjQ2IDMuMjQ2IDAgMDEtNC41NTQgMCAuNzUuNzUgMCAwMS0uMDA3LTEuMDZ6IiBmaWxsPSIjMjQxQzE1Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjI2NyA4LjgwM0E1LjUgNS41IDAgMTExMi4xIDMuOTM3QzEzLjA0IDIuNDQyIDE0Ljk2MyAxLjUgMTcgMS41YzIuODYzIDAgNS41IDEuODYgNS41IDQuNSAwIC45NzUtLjM2IDEuODQzLS45NTcgMi41NS41OTMuNzM1Ljk5IDEuNDkyIDEuMTg1IDIuMjcuMjIuODguMjM3IDIuMDE5LjA2MiAzLjQyOGwtLjAwNS4wMzhhNS41IDUuNSAwIDAxLTcuNzI3IDcuMzYxIDEzLjI5OCAxMy4yOTggMCAwMS00LjA1OC4zMTZWMjNIMVYxM2MwLTEuNTE2LjQ1OC0yLjk0NCAxLjI2Ny00LjE5N3pNMyA2YTQgNCAwIDAxNy41MS0xLjkxOWwuMDA3LjAxMmEzLjk5IDMuOTkgMCAwMS40NTYgMS40NWguMDAxYTQgNCAwIDAxLTcuNjc4IDEuOTdMMy4yOTIgNy41di4wMDFBMy45ODkgMy45ODkgMCAwMTMgNnptMTguNDA3IDYuNjgyYy4wMTEtLjU5OC0uMDM1LTEuMDk4LS4xMzUtMS40OTgtLjEzNS0uNTQyLS40Mi0xLjA5Mi0uODYzLTEuNjUtLjk2MS42MTQtMi4xNjQuOTY2LTMuNDA5Ljk2Ni0yLjAzNyAwLTMuOTYtLjk0Mi00LjktMi40MzdhNS41MDIgNS41MDIgMCAwMS04LjgyNiAxLjk4M0E2LjEyOCA2LjEyOCAwIDAwMi41IDEzSDExdjcuNDU5YTEyLjExMSAxMi4xMTEgMCAwMDIuNjY1LS4wNzQgNS41IDUuNSAwIDAxNy43NDItNy43MDN6bS00LjE4OCA4LjI0MmE0IDQgMCAxMDEuNTYzLTcuODQ3IDQgNCAwIDAwLTEuNTYzIDcuODQ3ek0xNyAzYy0yLjM4NCAwLTQgMS40OTktNCAzczEuNjE2IDMgNCAzIDQtMS40OTkgNC0zLTEuNjE2LTMtNC0zek0yLjUgMjEuNXYtN2g3djdoLTd6IiBmaWxsPSIjMjQxQzE1Ii8+PC9zdmc+' alt='img'/>
        <Text>Audience</Text>
     </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
  <ul className={styles.Paymentul} style={{textAlign:"left",listStyle:"none" ,paddingLeft:"47px"}}>
    <li>Audience dashboard</li>
    <li>All contacts</li>
    <li>Signup form</li>
    <li>Audience dashboard</li>
    <li>Audience dashboard</li>
  </ul>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem pt="10px" style={{border:"none"}}>
    <h2>
      <AccordionButton>
       
        <Box flex='1' textAlign='left'>
     <Flex  gap="20px">
        <Image boxSize='25px' src={img} alt='img'/>
        <Text>Campaigns</Text>
     </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className={styles.Paymentul} style={{textAlign:"left",listStyle:"none" ,paddingLeft:"47px"}}>
    <li>Audience dashboard</li>
    <li>All contacts</li>
    <li>Signup form</li>
    <li>Audience dashboard</li>
    <li>Audience dashboard</li>
  </ul>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem pt="10px" style={{border:"none"}}>
    <h2>
      <AccordionButton>
       
        <Box flex='1' textAlign='left'>
     <Flex  gap="20px">
        <Image boxSize='25px' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkuMjUgNWMwIC42ODUtMS4wNzYgMS0yLjExOCAxLTEuMDQgMC0xLjg4Mi0uNDIyLTEuODgyLTEgMC0uNTc4Ljg0NS0xIDEuODgyLTFDOC4xNyA0IDkuMjUgNC4zMTggOS4yNSA1eiIgZmlsbD0iIzI0MUMxNSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy43MjkgMi4yNDZDNC41OTkgMS42MDUgNS43NiAxLjI1IDcgMS4yNWMxLjE5NCAwIDIuNDYuMjU2IDMuNDU0LjgzNCAxLjAxNC41OSAxLjc5NiAxLjU1NyAxLjc5NiAyLjkxNiAwIDEuMzYxLS43NzggMi4zMjktMS43OTMgMi45MTktLjk5NC41NzgtMi4yNi44MzEtMy40NTcuODMxLTEuMjQyIDAtMi40MDQtLjM1NC0zLjI3NS0uOTk2QzIuODQ4IDcuMTA4IDIuMjUgNi4xNSAyLjI1IDVzLjYwMi0yLjEwOSAxLjQ3OS0yLjc1NHptLjg4OSAxLjIwOGMtLjU3Mi40Mi0uODY4Ljk2Mi0uODY4IDEuNTQ2IDAgLjU4NS4yOTUgMS4xMjcuODY1IDEuNTQ3LjU3Ny40MjUgMS40MTUuNzAzIDIuMzg1LjcwMyAxLjAxNSAwIDItLjIyIDIuNzAzLS42MjguNjgxLS4zOTYgMS4wNDctLjkyOCAxLjA0Ny0xLjYyMiAwLS42ODgtLjM2Ni0xLjIyMS0xLjA1LTEuNjItLjcwNS0uNDEtMS42OS0uNjMtMi43LS42My0uOTY2IDAtMS44MDQuMjc4LTIuMzgyLjcwNHoiIGZpbGw9IiMyNDFDMTUiLz48cGF0aCBkPSJNMjAuNzQ4IDcuOTQyQzIwLjU5MiA1LjkxNyAxOC45MTQgNC4yNSAxNyA0LjI1aC0zLjV2MS41SDE3bC4xNDQuMDA2YzEuMDUyLjA4NSAyLjAxNSAxLjA5IDIuMTA4IDIuMzAyLjExNCAxLjQ3My0uNDQ4IDIuMzQzLTEuOTM0IDIuNzE0LS42MDEuMTUtMS42MzYuMjM3LTMuODk3LjM0M2wtMi40MTYuMTA4Yy0yLjY3NC4xMjctNC4xMDkuMjU0LTUuMDE4LjVsLS4yMTcuMDYzYy0yLjE3NC42OTktMy4wMiAyLjA4LTMuMDIgNC4yMTQgMCAyLjAxMSAxLjM2NCAzLjc1IDMuMjUgMy43NWgzVjIybDMuNS0zTDkgMTZ2Mi4yNUg2bC0uMTMtLjAwNmMtLjkwNi0uMDg1LTEuNjItMS4wNS0xLjYyLTIuMjQ0IDAtMS41MjUuNDc2LTIuMzAzIDEuOTgtMi43ODZsLjA4OS0uMDI3Yy43MTEtLjIwNSAyLjAzNi0uMzMgNC40NDctLjQ1bDMuNzg2LS4xNzdjMS41MTMtLjA4MSAyLjM0NC0uMTYxIDIuOTQ3LS4yOWwuMTgzLS4wNDJjMi4yMjktLjU1NyAzLjIzMy0yLjExMyAzLjA2Ni00LjI4NnoiIGZpbGw9IiMyNDFDMTUiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDE1aDh2OGgtOHYtOHptNi41IDEuNWgtNXY1aDV2LTV6IiBmaWxsPSIjMjQxQzE1Ii8+PC9zdmc+" alt='img'/>
        <Text>Automations</Text>
     </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className={styles.Paymentul} style={{textAlign:"left",listStyle:"none" ,paddingLeft:"47px"}}>
    <li>Audience dashboard</li>
    <li>All contacts</li>
    <li>Signup form</li>
    <li>Audience dashboard</li>
    <li>Audience dashboard</li>
  </ul>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem pt="10px" style={{border:"none"}}>
    <h2>
      <AccordionButton>
       
        <Box flex='1' textAlign='left'>
     <Flex  gap="20px">
        <Image boxSize='25px' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDMuNUgzLjV2MTdINnYtMTd6TTYgMkgydjIwaDIwVjJINnptMS41IDEuNVY2aDEzVjMuNWgtMTN6bTAgNHYxM2gxM3YtMTNoLTEzem04LjI5IDEwLjUybC0xLjMtMS44NS0xLjM2IDEuNzFMMTEgMTBsNi42NyA0LjcxLTIuMTcuNzIgMS4zMSAxLjg3LTEuMDIuNzJ6IiBmaWxsPSIjMjQxQzE1Ii8+PC9zdmc+" alt='img'/>
        <Text>Website</Text>
     </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className={styles.Paymentul} style={{textAlign:"left",listStyle:"none" ,paddingLeft:"47px"}}>
    <li>Audience dashboard</li>
    <li>All contacts</li>
    <li>Signup form</li>
    <li>Audience dashboard</li>
    <li>Audience dashboard</li>
  </ul>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem pt="10px" style={{border:"none"}}>
    <h2>
      <AccordionButton>
       
        <Box flex='1' textAlign='left'>
     <Flex  gap="20px">
        <Image boxSize='25px' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy40NjggOUw4LjUgMy41IDYuNzIgOUgxdjdoMy40NTZMMyAyMC41IDIyLjUgMTkgMTkgMTUuMTI1VjloLTUuNTMyem0tMi4wMjEgMGwtMi4zMi0yLjU2N0w4LjI5OCA5aDMuMTV6bTYuMzIyIDdINi4wMzJsLS45MTYgMi44MzMgMTQuMjI0LTEuMDk0TDE3Ljc2OCAxNnpNMi41IDE0LjV2LTRoMTV2NGgtMTV6IiBmaWxsPSIjMjQxQzE1Ii8+PHBhdGggZD0iTTE3LjUgNWE1LjUgNS41IDAgMDEzLjkzNSA5LjM0M2wtMS4wNC0xLjA4M2E0IDQgMCAwMC01LjUzNS01Ljc2NWwtMS4wNC0xLjA4M0E1LjQ4IDUuNDggMCAwMTE3LjUgNXoiIGZpbGw9IiMyNDFDMTUiLz48L3N2Zz4=" alt='img'/>
        <Text>Content Studio</Text>
     </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className={styles.Paymentul} style={{textAlign:"left",listStyle:"none" ,paddingLeft:"47px"}}>
    <li>Audience dashboard</li>
    <li>All contacts</li>
    <li>Signup form</li>
    <li>Audience dashboard</li>
    <li>Audience dashboard</li>
  </ul>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem pt="10px" style={{border:"none"}}>
    <h2>
      <AccordionButton>
       
        <Box flex='1' textAlign='left'>
     <Flex  gap="20px">
        <Image boxSize='25px' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yIDExVjJoOXY5SDJ6bTEuNS03LjVoNnY2aC02di02ek0xMyAyMnYtOWg5djloLTl6bTEuNS03LjVoNnY2aC02di02ek0yIDEzdjloOXYtOUgyem03LjUgMS41aC02djZoNnYtNnpNMTMgMTFWMmg5djloLTl6bTEuNS03LjVoNnY2aC02di02eiIgZmlsbD0iIzI0MUMxNSIvPjwvc3ZnPg==" alt='img'/>
        <Text>Integrations</Text>
     </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className={styles.Paymentul} style={{textAlign:"left",listStyle:"none" ,paddingLeft:"47px"}}>
    <li>Audience dashboard</li>
    <li>All contacts</li>
    <li>Signup form</li>
    <li>Audience dashboard</li>
    <li>Audience dashboard</li>
  </ul>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem pt="10px" style={{border:"none"}}>
    <h2>
      <AccordionButton>
       
        <Box flex='1' textAlign='left'>
     <Flex  gap="20px">
        <Image boxSize='25px' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuOTcgMTMuNTNjLjUzNC41MzUgMS4xMzggMS4wMDkgMS44NiAxLjIzMy43NTIuMjMyIDEuNTQ0LjE3IDIuMzk0LS4yMDdsLS42MDgtMS4zNzJjLS41Ny4yNTMtLjk4OC4yNTYtMS4zNDEuMTQ2LS4zODMtLjExOS0uNzgtLjM5NS0xLjI0NS0uODZsLTEuMDYgMS4wNnoiIGZpbGw9IiMyNDFDMTUiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNDc1IDE1Ljk1NWE2LjUgNi41IDAgMTE5LjY5Mi0uNTZsNS4zIDUuMy0xLjA2IDEuMDYtNS4zLTUuM2E2LjUwMSA2LjUwMSAwIDAxLTguNjMyLS41em0xLjA2LTguMTMyYTUgNSAwIDEwNy4wNzIgNy4wNzEgNSA1IDAgMDAtNy4wNzEtNy4wN3oiIGZpbGw9IiMyNDFDMTUiLz48L3N2Zz4=" alt='img'/>
        <Text>Search</Text>
     </Flex>
        </Box>
        
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <ul className={styles.Paymentul} style={{textAlign:"left",listStyle:"none" ,paddingLeft:"47px"}}>
    <li>Audience dashboard</li>
    <li>All contacts</li>
    <li>Signup form</li>
    <li>Audience dashboard</li>
    <li>Audience dashboard</li>
  </ul>
    </AccordionPanel>
  </AccordionItem>

</Accordion>
<Button w="95%" mt="100px" bg="#d1e7ea" color="teal" _hover={{bg:"#d1e7ea",color:"teal"}} >Upgrade</Button>
    </Box>
    {/* border="2px solid red" */}
     <Box  w="60%"  >
        <Box textAlign="left" mt="40px" pl="60px"> 
     <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Selection</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Confirmation</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
</Box>
<Flex  p="25px 0 0 60px"   gap="100px">
    <Box>
        <Text pt="10px">Payment method</Text>
    </Box>
    <Box>
    <Tabs>
    {/* border="2px solid green" */}
  <TabList  w="80%">
    <Tab>Credit Card</Tab>
    <Tab>PayPal</Tab>
   
  </TabList>

  <TabPanels>
    <TabPanel>
    <Flex gap="5px">
        <Image src="https://us9.admin.mailchimp.com/images/icons/amex.png"/>
        <Image src="https://us9.admin.mailchimp.com/images/icons/disc.png"/>
        <Image src="https://us9.admin.mailchimp.com/images/icons/mast.png"/>
        <Image src="https://us9.admin.mailchimp.com/images/icons/visa.png"/>
        
    </Flex>
    <Box>
        <Text pt="10px" textAlign="left">Card Number</Text>
        <Input m="10px 340px 0 0px" placeholder='111 2222 3333 4444' size='md' w="50%" />
    </Box>
    <Box pt="10px" textAlign="left" display="flex">
        <Box  >
       
        <Flex gap="10px"  >
            <Box>
        <Text>Expires</Text>
            <Input m="10px 10px 0 0px" w="40%" placeholder='MM' size="md"/>
            <Input mt="10px" w="40%" placeholder='YY' size="md"/>
            </Box>
            <Box  >
            <Text p="5px 0 5px 0">CVV</Text>
            <Input placeholder='123' w="60%" size="md" />
        </Box>
        </Flex>
        </Box>
       
    </Box>
    <Button  m="20px 640px 0 0">Save</Button>
   {/* <hr /> */}
   <Flex p="20px 0 20px 0" >
    <Box>
        <Text ml="-200px">Contact address</Text>
    </Box>
    <Box>
    <Stack spacing={3}>
  <Input placeholder='Enter your name' size='md' />
  <Input placeholder='Enter your Address' size='md' />
  <Input placeholder='Enter your Pin-code' size='md' />
  <Button bg="teal" color="white" _hover={{background:"teal" ,color:'white'}}>Save</Button>
  
</Stack>
    </Box>
   </Flex>
   {/* border="2px solid red" */}
   <Flex  w="60%" gap="145px">
   <Text ml="-200px" >Tax setting</Text>
    <Box>
        <Text pb="10px">Registered VAT/GST/Tax ID (optional)</Text>
        <Input mb="10px"/>
        <Flex gap="10px">
            <Button>Save</Button>
            <Button>Cancel</Button>
        </Flex>
    </Box>
   </Flex>
    </TabPanel>
    <TabPanel>
     <Flex  align="center" gap="10px">
        <Image   boxSize='60px' src="https://us9.admin.mailchimp.com/images/third-party-logos/paypal.svg" />
        <Text>PayPal balance, eCheck, credit, and more</Text>
     </Flex>
     <Button ml="-200px" bg="teal" color="white" _hover={{bg:"teal",color:"white"}}>Connect to PayPal</Button>
     <Flex mt="30px">
    <Box>
        <Text ml="-200px">Contact address</Text>
    </Box>
    <Box>
    <Stack spacing={4}>
  <Input placeholder='Enter your name' size='md' />
  <Input placeholder='Enter your Address' size='md' />
  <Input placeholder='Enter your Pin-code' size='md' />
  <Button bg="teal" color="white" _hover={{bg:"teal",color:"white"}}>Save</Button>
</Stack>
    </Box>
   </Flex>
   <Flex mt="30px" gap="145px">
    <Text  ml="-220px">Tax setting</Text>
    <Box>
        <Text>Registered VAT/GST/Tax ID (optional)</Text>
        <Input/>
        <Flex gap="10px">
            <Button bg="teal" color="white" _hover={{bg:"teal",color:"white"}}>Save</Button>
            <Button bg="teal" color="white" _hover={{bg:"teal",color:"white"}}>Cancel</Button>
        </Flex>
    </Box>
   </Flex>
    </TabPanel>
    
  </TabPanels>
</Tabs>
    </Box>
</Flex>
     </Box>
     {/* border="2px solid blue" */}
     <Box  w="30%">
     <Paynow/>
     </Box>
     </Flex>
  </Box>
  )
}

export default Payment