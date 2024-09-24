unpackedContents = {
	uniqueIdentifier = "060976cc13c645f98303c565afe489b9",
	bundleIdentifier = "e340a7c6f9284ae4aee73c8d483c56bd",
	category = "codeblock",
	entryId = "15873444-8d16-4d28-9091-9c623fda5224",
	contents = {
		CoreVersion = {
			Major = 0,
			Minor = 2
		},
		ScriptVersion = {
			Major = 1,
			Minor = 1
		},
		Description = "",
		Id = "15873444-8d16-4d28-9091-9c623fda5224",
		Language = 1,
		Name = "UIPopup",
		Type = 5,
		Source = 0,
		Target = nil,
		ModifyTime = "2024-09-24T12:51:33.2473353+09:00",
		Properties = {
			{
				Type = "Component",
				DefaultValue = "3606e39d-32de-427e-8d23-b38af810a3b4:52",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "message"
			},
			{
				Type = "Component",
				DefaultValue = "94a274e4-4111-40f1-924d-c95a3a1f14d5:9",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "btnOk"
			},
			{
				Type = "Component",
				DefaultValue = "0f5de49b-2adc-409a-816d-15aa43df8e0d:9",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "btnCancel"
			},
			{
				Type = "Entity",
				DefaultValue = "fb7a3b06-7026-4590-8efe-bb33416dd8f9",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "popupGroup"
			},
			{
				Type = "Entity",
				DefaultValue = "aa954759-0e39-430f-85fa-80bf2e5fe31d",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "popup"
			},
			{
				Type = "any",
				DefaultValue = "nil",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "onOk"
			},
			{
				Type = "any",
				DefaultValue = "nil",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "onCancel"
			},
			{
				Type = "number",
				DefaultValue = "0.15",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "duration"
			},
			{
				Type = "number",
				DefaultValue = "0.5",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "from"
			},
			{
				Type = "number",
				DefaultValue = "1",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "to"
			},
			{
				Type = "boolean",
				DefaultValue = "false",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "isOpen"
			},
			{
				Type = "boolean",
				DefaultValue = "false",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "isTweenPlaying"
			},
			{
				Type = "number",
				DefaultValue = "0",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "tweenEventId"
			},
			{
				Type = "any",
				DefaultValue = "nil",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "okHandler"
			},
			{
				Type = "any",
				DefaultValue = "nil",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "cancelHandler"
			}
		},
		Methods = {
			{
				Return = {
					Type = "void",
					DefaultValue = nil,
					SyncDirection = 0,
					Attributes = {
					},
					Name = nil
				},
				Arguments = {
					{
						Type = "string",
						DefaultValue = nil,
						SyncDirection = 0,
						Attributes = {
						},
						Name = "message"
					},
					{
						Type = "any",
						DefaultValue = nil,
						SyncDirection = 0,
						Attributes = {
						},
						Name = "onOk"
					},
					{
						Type = "any",
						DefaultValue = nil,
						SyncDirection = 0,
						Attributes = {
						},
						Name = "onCancel"
					}
				},
				Code = function(message, onOk, onCancel)
					if self.isOpen == true then
						return
					end
					self.isOpen = true
					self.popupGroup.Enable = true
					self.message.Text = message
					self.onOk = onOk
					self.onCancel = onCancel
					
					
					self.okHandler = self.btnOk.Entity:ConnectEvent(ButtonClickEvent,self.OnClickOk)
					self.cancelHandler = self.btnCancel.Entity:ConnectEvent(ButtonClickEvent,self.OnClickCancel)
					self:StartTween(true)
				end,
				Scope = 2,
				ExecSpace = 0,
				Attributes = {
				},
				Name = "Open"
			},
			{
				Return = {
					Type = "void",
					DefaultValue = nil,
					SyncDirection = 0,
					Attributes = {
					},
					Name = nil
				},
				Arguments = {
				},
				Code = function()
					if self.isTweenPlaying == true then
						return
					end
					if self.onOk ~= nil then
						self.onOk()
						self.onOk = nil
					end
					self:Close()
				end,
				Scope = 2,
				ExecSpace = 0,
				Attributes = {
				},
				Name = "OnClickOk"
			},
			{
				Return = {
					Type = "void",
					DefaultValue = nil,
					SyncDirection = 0,
					Attributes = {
					},
					Name = nil
				},
				Arguments = {
				},
				Code = function()
					if self.isTweenPlaying == true then
						return
					end
					if self.onCancel ~= nil then
						self.onCancel()
						self.onCancel = nil
					end
					self:Close()
				end,
				Scope = 2,
				ExecSpace = 0,
				Attributes = {
				},
				Name = "OnClickCancel"
			},
			{
				Return = {
					Type = "void",
					DefaultValue = nil,
					SyncDirection = 0,
					Attributes = {
					},
					Name = nil
				},
				Arguments = {
				},
				Code = function()
					self.btnOk.Entity:DisconnectEvent(ButtonClickEvent,self.okHandler)
					self.btnCancel.Entity:DisconnectEvent(ButtonClickEvent,self.cancelHandler)
					self:StartTween(false)
				end,
				Scope = 2,
				ExecSpace = 0,
				Attributes = {
				},
				Name = "Close"
			},
			{
				Return = {
					Type = "void",
					DefaultValue = nil,
					SyncDirection = 0,
					Attributes = {
					},
					Name = nil
				},
				Arguments = {
					{
						Type = "boolean",
						DefaultValue = nil,
						SyncDirection = 0,
						Attributes = {
						},
						Name = "open"
					}
				},
				Code = function(open)
					
					local transform = self.popup.UITransformComponent
					local canvasGroup = self.popupGroup.CanvasGroupComponent 
					if open == true then
						canvasGroup.GroupAlpha = 0
						transform.UIScale = Vector3(self.from,self.from,1)
					else
						transform.UIScale = Vector3(self.to,self.to,1)
					end
					self.isTweenPlaying = true
					local time = 0
					
					
					local preTime = _UtilLogic.ElapsedSeconds
					
					local tween = function()
						local delta = _UtilLogic.ElapsedSeconds - preTime
						time = time + delta
						local timeValue = time	
						preTime = _UtilLogic.ElapsedSeconds
					
						if time >= self.duration then
							timeValue = self.duration
							if open == false then
								self.popupGroup.Enable = false
								self.isOpen = false
							end
							self.isTweenPlaying = false
							_TimerService:ClearTimer(self.tweenEventId)
					
						end
						if open == false then
							timeValue = self.duration - timeValue
						end
						local tweenValue = _TweenLogic:Ease(self.from, self.to, 
							self.duration, EaseType.SineEaseIn, timeValue)
						transform.UIScale = Vector3(tweenValue,tweenValue,1)
						canvasGroup.GroupAlpha = timeValue / self.duration
					end
					self.tweenEventId = _TimerService:SetTimerRepeat(tween,1/60)
					
				end,
				Scope = 2,
				ExecSpace = 0,
				Attributes = {
				},
				Name = "StartTween"
			}
		},
		EntityEventHandlers = {
		}
	}
}

return unpackedContents