unpackedContents = {
	uniqueIdentifier = "8874eb122f3b47928f7bcc37473265f7",
	bundleIdentifier = "e340a7c6f9284ae4aee73c8d483c56bd",
	category = "codeblock",
	entryId = "63fe07f0-2bcd-462c-8157-d6031e053b5e",
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
		Id = "63fe07f0-2bcd-462c-8157-d6031e053b5e",
		Language = 1,
		Name = "UIToast",
		Type = 5,
		Source = 0,
		Target = nil,
		ModifyTime = "2024-09-24T12:51:33.2573448+09:00",
		Properties = {
			{
				Type = "Component",
				DefaultValue = "7af9e538-1713-49f7-a83e-711c0f4b4a3c:52",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "message"
			},
			{
				Type = "Entity",
				DefaultValue = "0bc398f9-29cb-4d89-a78d-f24742b117e8",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "toastGroup"
			},
			{
				Type = "number",
				DefaultValue = "2",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "duration"
			},
			{
				Type = "number",
				DefaultValue = "0.1",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "tweenDuration"
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
				Type = "boolean",
				DefaultValue = "false",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "isTweenPlaying"
			},
			{
				Type = "boolean",
				DefaultValue = "false",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "inited"
			},
			{
				Type = "number",
				DefaultValue = "0",
				SyncDirection = 0,
				Attributes = {
				},
				Name = "offset"
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
						DefaultValue = "",
						SyncDirection = 0,
						Attributes = {
						},
						Name = "message"
					}
				},
				Code = function(message)
					if self.inited == false then
						self.inited = true
						self.offset = -self.message.Entity.UITransformComponent.anchoredPosition.y
					end
					self.message.Text = message
					self:StartTween()
				end,
				Scope = 2,
				ExecSpace = 6,
				Attributes = {
				},
				Name = "ShowMessage"
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
					local canvasGroup = self.message.Entity.CanvasGroupComponent
					local transform = self.message.Entity.UITransformComponent
					if self.tweenEventId > 0 then
						_TimerService:ClearTimer(self.tweenEventId)
						self.tweenEventId = 0
					else
						canvasGroup.GroupAlpha = 0
					end
					self.toastGroup.Enable = true
					local time = 0
					
					local preTime = _UtilLogic.ElapsedSeconds
					
					local tween = function()
						local delta = _UtilLogic.ElapsedSeconds - preTime
						time = time + delta
						preTime = _UtilLogic.ElapsedSeconds
					
						local alpha = canvasGroup.GroupAlpha 
						if time >= (self.duration + self.tweenDuration) then		
							self.toastGroup.Enable = false
							_TimerService:ClearTimer(self.tweenEventId)
							self.tweenEventId = 0
							alpha = 0
						else
							if time > self.duration then			
								alpha = alpha - delta / self.tweenDuration
							else
								alpha = alpha + delta / self.tweenDuration
							end			
						end	
						alpha = math.min(1,math.max(alpha,0))
						
						canvasGroup.GroupAlpha = alpha
						local tweenValue = _TweenLogic:Ease(0,1,1,EaseType.SineEaseIn,alpha)
						transform.anchoredPosition = Vector2(0,-self.offset * tweenValue)
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